import { elastic } from '../../config/elastic.config'
import { ProfileElasticDataSource } from '../../profile/dataSource/profile.elastic.datasource'
import { StreamManager } from '../stream.manager'

module.exports.handler = async (event: any) => {
    const streamManager = new StreamManager(new ProfileElasticDataSource(elastic))
    const result = await streamManager.indexProfileRecords(event)
    return {
        statusCode: 200,
        body: result.map(item => item.body)
    
    }

    
}
