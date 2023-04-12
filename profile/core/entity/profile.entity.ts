
import { dynamoDB } from "../../../config/dynamoDB.config"

export class Profile  {
    id: string
    name: string
    description: string
    city: string
    state: string
    country: string
    occupation: string
    experiences: {
        company: string;
        companyProfile: string;
        location: string;
        end: Date;
        title: string;
        start: Date;
    }[]
    education: {
        school: string;
        degree: string;
        schoolProfile: string;
        descrption: string;
        end: Date;
        start: Date;
    }[]
    languages: string[]
    phones: string[]
    emails: string[]
}





