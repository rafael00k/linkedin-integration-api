import { elastic } from "../../../config/elastic.config";
import { ProfileDatabase } from "../../dataSource/profile.datasource";
import { ProfileElasticDataSource } from "../../dataSource/profile.elastic.datasource";
import { GetProfilesUseCase } from "../../core/useCases/getProfiles.useCase";

module.exports.handler = async (event) => {
    //queryStringParameters
    const result = await new GetProfilesUseCase(new ProfileDatabase(), new ProfileElasticDataSource(elastic)).execute(event?.queryStringParameters)
    return {
      statusCode: 200,
      body: JSON.stringify(
        result,
        null,
        2
      ),
    };
  };
