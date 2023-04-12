import { DynamoDBStreamEvent } from "../../config/awsModel";
import {DynamoDB} from 'aws-sdk'
import { ProfileElasticInput } from "../../profile/presentation/dto/profile.elastic.input.dto";
export function mapStreamToElasticProfile (input: DynamoDBStreamEvent): ProfileElasticInput[] {
    const converter = DynamoDB.Converter
    return input.Records.map(record => {
        return {
            id: converter.unmarshall(record.dynamodb.Keys)?.id,
            ...converter.unmarshall(record.dynamodb.NewImage)
        } as ProfileElasticInput
    })
} 
