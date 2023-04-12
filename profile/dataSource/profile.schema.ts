import { dynamoDB } from "../../config/dynamoDB.config";

export const profileSchema =  new dynamoDB.Schema({
    id: String,
    name: String,
    description: String,
    city: String,
    state: String,
    country: String,
    occupation: String,
    experiences: {
        type: Array,
        schema: [
            {
                type: Object,
            schema: {
            company: String,
            companyProfile: String,
            location: [String,dynamoDB.type.NULL],
            end: Date,
            title: String,
            start: Date
        }}]
    },
    education: {
        type: Array,
        schema: [{
            type: Object,    
            schema:{
            school: String,
            schoolProfile: String,
            descrption: String,
            degree: String,
            end: Date,
            start: Date
        }}]
    },
    languages: {
        type: Array,
        schema: [String]
    },
    phones: {
        type: Array,
        schema: [String]
    },
    emails: {
        type: Array,
        schema: [String],
    }
},{})
