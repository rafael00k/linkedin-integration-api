const elastic = require('@elastic/elasticsearch')


function createProfileIndex() {
    const elasticClient = new elastic.Client({node: 'http://localhost:9200'})
    return elasticClient.indices.create({
        index: 'profile',
        body: {
            mappings: {
                properties: {
                    name: { type: "text" },
                    city: {type: "keyword"},
                    state: {type: "keyword"},
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
                         degree: {type: "keyword"},
                            
                        },        
                    },
                    languages: {type: "text"}               
                }    
            }
        }
    })
}

createProfileIndex().then(() => console.log("SUCCESS")).catch(err => console.log("Error:",err))


