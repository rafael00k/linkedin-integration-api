import {Client} from '@elastic/elasticsearch'
export const elastic = new Client({
    node: 'http://localhost:9200',
    maxRetries: 5,
    requestTimeout: 60000,
})
