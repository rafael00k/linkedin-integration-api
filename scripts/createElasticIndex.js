const elastic = require('@elastic/elasticsearch')


function createProfileIndex() {
    const elasticClient = new elastic.Client({node: 'http://localhost:9200'})
    return elasticClient.indices.create({
        index: 'profile',
        body: {
            settings: {
                analysis: {
                    normalizer: {
                        keyword_lowercase: {
                            type: "custom",
                            filter: ["lowercase"]
                        }
                    }
                }
            },
            mappings: {
                properties: {
                    name: { type: "text" },
                    city: {
                        type: "keyword",
                        normalizer: "keyword_lowercase"
                    },
                    state: {
                        type: "keyword",
                        normalizer: "keyword_lowercase"
                    },
                    country: {
                        type: "keyword",
                        normalizer: "keyword_lowercase"
                    },
                    occupation: {type: "text"},
                    experiences: {
                        properties: {
                            title: {type: "text"},
                            start: {type: "date"},
                            end: {type: "date"},
                            company: {type: "text"},
                            location: { type: "text"}    
                        }
                    },
                    education: {
                        properties: {
                         start: {type: "date"},
                         end: { type: "date"},
                         degree: {
                            type: "keyword",
                            normalizer: "keyword_lowercase"
                            },
                            
                        },        
                    },
                    languages: {
                        type: "keyword",
                        normalizer: "keyword_lowercase"
                    }               
                }    
            }
        }
    })
}

createProfileIndex().then(() => console.log("SUCCESS")).catch(err => console.log("Error:",err))


