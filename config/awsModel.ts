import { DynamoDB } from 'aws-sdk'
export interface DynamoDBStreamEvent {
    Records: {
        eventName: string
        dynamodb: {
            Keys: DynamoDB.AttributeMap
            NewImage: DynamoDB.AttributeMap
        }
    }[]
}
