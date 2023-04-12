

import { Item } from "dynamoose/dist/Item";
import { getConfig } from "../../config/config";
import { dynamoDB } from "../../config/dynamoDB.config";
import { Profile } from "../core/entity/profile.entity";
import { profileSchema } from "./profile.schema";


export class ProfileDatabase {
    constructor() { }

    private profileModel = dynamoDB.model(getConfig().PROFILE_TABLE || "", profileSchema, {
        create: false
    })

    async saveProfile(profile: Profile) {
        const newProfile = new this.profileModel(profile)
        return await newProfile.save()

    }

    async getProfile(id: string): Promise<Item> {
        return this.profileModel.get({ id })
    }

    async getProfiles(ids: string[]): Promise<Item[]> {
        return Promise.all(ids.map(id => this.profileModel.get({ id })))
    }
}
