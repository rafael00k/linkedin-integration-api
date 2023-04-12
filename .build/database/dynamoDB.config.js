"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamoDB = void 0;
var dynamoose = require("dynamoose");
// import { TypeDynamo } from "type-dynamo";
// export const typeDynamo = new TypeDynamo({
//     // endpoint: 'http://localhost:8000',
//     region: 'us-east-1',
//     accessKeyId: 'DEFAULT_ACCESS_KEY',
//     secretAccessKey: 'DEFAULT_SECRET'
// })
// export function getDynamoDB() {
//     return new DynamoDB.DocumentClient({
//         region: 'localhost',
//         endpoint: 'http://localhost:8000',
//         accessKeyId: 'DEFAULT_ACCESS_KEY',  
//         secretAccessKey: 'DEFAULT_SECRET' 
//     })
// }
dynamoose.aws.ddb.local();
exports.dynamoDB = dynamoose;
//# sourceMappingURL=dynamoDB.config.js.map