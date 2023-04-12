import { Profile } from "../core/entity/profile.entity";
import { LinkedinEducationOutput, LinkedinExperienceOutput, LinkedinPeriodOutput, LinkedinProfileOutput } from "../presentation/dto/linkedin.profile.dto";
import {v4 as uuidv4 } from "uuid"
import { removeEmptyValues } from "../../utils/utils";

export function profileMapperToDB(profile: LinkedinProfileOutput): Profile {
    return removeEmptyValues({
        id: uuidv4(),
        name: profile.full_name,
        description: profile.summary,
        city: profile.city,
        state: profile.state,
        country: profile.country_full_name,
        occupation: profile.occupation,
        experiences: profileExperienceMapper(profile.experiences),
        education: profileEducationMapper(profile.education),
        languages: profile.languages,
        phones: profile.personal_numbers,
        emails: profile.personal_emails
    })
}

function profileExperienceMapper(experiences: LinkedinExperienceOutput[]) {
    return experiences.map(experience => {
        const resutlt = removeEmptyValues({
           title: experience.title, 
           start: profilePeriodFormatter(experience.starts_at),
           ...(experience?.ends_at && {end: profilePeriodFormatter(experience?.ends_at)}),
            company: experience.company,
            companyProfile: experience.company_linkedin_profile_url,
            location: experience?.location 
        })
        return resutlt
    })
}

function profileEducationMapper(education: LinkedinEducationOutput[]) {
    return education.map(item => {
        const result = removeEmptyValues({
            start: profilePeriodFormatter(item.starts_at),
            ...(item?.ends_at && {end: profilePeriodFormatter(item.ends_at)}),
            school: item.school,
            degree: item.degree_name,
            schoolProfile: item.school_linkedin_profile_url,
            descrption: item.description      
        })
        return result
    })
}

function profilePeriodFormatter(period: LinkedinPeriodOutput): Date {
    return new Date(period.year, period.month -1, period.day)
}
