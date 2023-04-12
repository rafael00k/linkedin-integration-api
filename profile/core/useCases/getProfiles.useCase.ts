import { elastic } from "../../../config/elastic.config";
import { SearchProfileInput } from "../../presentation/dto/profile.elastic.input.dto";
import { ProfileDatabase } from "../../dataSource/profile.datasource";
import { ProfileElasticDataSource } from "../../dataSource/profile.elastic.datasource";

export class GetProfilesUseCase {
    constructor(
        private readonly profileDataSource: ProfileDatabase,
        private readonly profileElasticDataSource: ProfileElasticDataSource
        ) {
        this.profileDataSource = new ProfileDatabase()
        this.profileElasticDataSource = new ProfileElasticDataSource(elastic)    
    }

    async execute(input: SearchProfileInput) {
        const ids = await this.profileElasticDataSource.getProfile(input)
        return this.profileDataSource.getProfiles(ids)  

    }
} 
