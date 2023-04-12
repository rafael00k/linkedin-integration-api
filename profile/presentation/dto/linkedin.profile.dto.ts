export type LinkedinProfileOutput = {
    public_identifier: string
    full_name: string
    occupation: string
    summary: string
    country: string
    country_full_name: string
    city: string,
    state: string,
    experiences: LinkedinExperienceOutput[]
    education: LinkedinEducationOutput[]
    languages: string[]
    personal_numbers: string[]
    personal_emails: string[]
}

export type LinkedinPeriodOutput = {
    day: number,
    month: number,
    year: number
}

export type LinkedinExperienceOutput = {
    starts_at: LinkedinPeriodOutput
    ends_at: LinkedinPeriodOutput
    company: string
    company_linkedin_profile_url: string
    title: string
    location: string

}

export type LinkedinEducationOutput = {
    starts_at: LinkedinPeriodOutput
    ends_at: LinkedinPeriodOutput
    field_of_study: string,
    degree_name: string,
    school: string,
    school_linkedin_profile_url: string,
    description: string,    
} 
