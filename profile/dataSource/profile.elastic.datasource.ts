import { Client } from "@elastic/elasticsearch";
import { elastic } from "../../config/elastic.config";
import { ProfileElasticInput, SearchProfileInput } from "../presentation/dto/profile.elastic.input.dto";

export class ProfileElasticDataSource {
    constructor( private readonly elasticDatasource: Client) {
        this.elasticDatasource = elastic
    }

    async indexProfile( profile: ProfileElasticInput) {
        return this.elasticDatasource.index(
            {
                index: 'profile',
                body: profile
            }
        )
    }

    async getProfile(input: SearchProfileInput): Promise<string[]> {
        const result = await this.elasticDatasource.search({
            index: 'profile',
            body: {
                query: {
                    bool: this.handleSearchBody(input)    
                }
                
            }
        })

        return result.body?.hits?.hits?.map(hit => hit?._source?.id)
    }

    private handleSearchBody(input: SearchProfileInput) {
     const must = this.handleMustSearchBody(input)   
     const should = this.handleKeyword(input)
     return {
         must,
         should
     }  


    }

    private handleMustSearchBody(input: SearchProfileInput): object[] {
        const result: object[] = [] 
        if(input?.country) {
            result.push({
                match: {
                    country: input.country    
                }        
            })
        }

        if(input?.city) {
            result.push({
                match: {
                    country: input.country    
                }        
            })    
        }

        if(input?.state) {
            result.push({
                match: {
                    country: input.country    
                }        
            })    
        }

        if(input.languages) {
            result.push({
                match: {
                    languages: input.languages    
                }        
            })    
        }

        return result
    }

    private handleKeyword(input: SearchProfileInput): object[] {
        const result: object[] = []
        const { keyWord } = input
        if(keyWord) {
            result.push({
                wildcard: {
                    description: `*${keyWord}*`
                }
            })
            
            result.push({
                wildcard: {
                    occupation: `*${keyWord}*`
                }            
            })

            result.push({
                wildcard: {
                    description: `*${keyWord}*`
                }
            })
        }

        return result
    }
}
