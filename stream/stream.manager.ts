import { DynamoDBStreamEvent } from "../config/awsModel";
import { elastic } from "../config/elastic.config";
import { ProfileElasticDataSource } from "../profile/dataSource/profile.elastic.datasource";
import { mapStreamToElasticProfile } from "./mappers/stream.mapper";

export class StreamManager {
    constructor(private readonly profileElasticDataSource: ProfileElasticDataSource) {
        this.profileElasticDataSource = new ProfileElasticDataSource(elastic)
    }

    async indexProfileRecords(input: DynamoDBStreamEvent) {
       const profileInputs = mapStreamToElasticProfile(input) 
       return Promise.all(profileInputs.map(input => this.profileElasticDataSource.indexProfile(input)))
    }
}
