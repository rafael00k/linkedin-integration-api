// import { typeDynamo } from "../../database/dynamoDB.config";
// import { getDynamoDB } from "../../database/dynamoDB.config";

import { Item } from "dynamoose/dist/Item";
import { dynamoDB } from "../../config/dynamoDB.config";
import { Profile } from "../core/entity/profile.entity";
import { profileSchema } from "./profile.schema";


export class ProfileDatabase {
    constructor() {}

    private profileModel = dynamoDB.model('ProfileTableNew',profileSchema,{
        create: false
    })

    async saveProfile(profile: Profile) {
        const newProfile =  new this.profileModel(profile)
        return await newProfile.save() 
       
        // const result = await this.profiseRepository.save(profile).execute()
        // return result.data
    }

    async getProfile(id: string): Promise<Item> {
        return this.profileModel.get({id})
    }

    async getProfiles(ids: string[]): Promise<Item[]> {
        return Promise.all(ids.map(id => this.profileModel.get({id})))    
    }
}
