import { Client } from "@elastic/elasticsearch";
import { getConfig } from "../../config/config";
import { elastic } from "../../config/elastic.config";
import { ProfileElasticInput, SearchProfileInput } from "../presentation/dto/profile.elastic.input.dto";

export class ProfileElasticDataSource {
    constructor(private readonly elasticDatasource: Client) {
        this.elasticDatasource = elastic
    }

    async indexProfile(profile: ProfileElasticInput) {
        return this.elasticDatasource.index(
            {
                index: process.env.ELASTIC_PROFILE_INDEX || "",
                body: profile
            }
        )
    }

    async getProfile(input: SearchProfileInput): Promise<string[]> {
        if (Object.keys(input)) {
            const result = await this.elasticDatasource.search({
                index: getConfig().ELASTIC_PROFILE_INDEX,
                body: {
                    query: {
                        bool: {

                            must: [...this.handleMustSearchBody(input), {
                                bool: {
                                    should: this.handleKeyword(input)
                                }
                            }],



                        }
                    }

                }
            })
            return result.body?.hits?.hits?.map(hit => hit?._source?.id)
        }
        return []



    }

    private handleSearchBody(input: SearchProfileInput) {
        const must = this.handleMustSearchBody(input)
        const should = this.handleKeyword(input)
        const result = {
            ...(Object.keys(must).length && { must }),
            ...(Object.keys(should).length && { should })
        }
        return result

    }

    private handleMustSearchBody(input: SearchProfileInput): object[] {
        const result: object[] = []
        if (input?.city) {
            result.push({
                term: {
                    city: {
                        value: input.city.toLowerCase()
                    }
                }
            })
        }

        if (input?.country) {
            result.push({
                term: {
                    country: {
                        value: input.country.toLowerCase()
                    }
                }
            })
        }

        if (input?.state) {
            result.push({
                term: {
                    state: {
                        value: input.state.toLowerCase()
                    }
                }
            })
        }

        if (input.languages) {
            result.push({
                term: {
                    languages: input.languages
                }
            })
        }

        return result
    }

    private handleKeyword(input: SearchProfileInput): object[] {
        const result: object[] = []
        const { keyWord } = input
        if (keyWord) {
            result.push({
                match_phrase_prefix: {
                    description: keyWord
                }
            })

            result.push({
                match_phrase_prefix: {
                    occupation: keyWord
                }
            })

            result.push({
                match_phrase_prefix: {
                    ["experiences.title"]: keyWord
                }
            })
        }

        return result
    }
}
