export interface ProfileElasticInput {
    id: string
    name: string
    ocupation: string
    experience: {
        title: string
        start: number
        end?: number
        company: string
        location?: string
    }[]
    education: {
        start: number
        end?: number
        degree: string
    }[]
    language: string[]
}

export interface SearchProfileInput {
    keyWord?: string
    name?: string
    languages?: string[]
    occupation?: string
    company?: string
    country?: string
    city?: string
    state?: string

}
