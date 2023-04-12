import { Item } from "dynamoose/dist/Item";
import { LinkedinDataSource } from "../../dataSource/linkedin.datasource";
import { ProfileDatabase } from "../../dataSource/profile.datasource";
import { profileMapperToDB } from "../../mapper/linkedin.mapper";

export class InsertProfileUseCase {
    constructor(
        private readonly profileDataSource: ProfileDatabase,
        private readonly linkedinDataSource: LinkedinDataSource,
        ) {
            this.profileDataSource = new ProfileDatabase()
            this.linkedinDataSource = new LinkedinDataSource()
        }

        async execute(url: string): Promise<Item> {
            const externalProfile = await this.linkedinDataSource.getProfile(url)
            return this.profileDataSource.saveProfile(profileMapperToDB(externalProfile))    
        }
}
