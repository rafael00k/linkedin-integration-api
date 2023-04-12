import { LinkedinDataSource } from "../../dataSource/linkedin.datasource";
import { ProfileDatabase } from "../../dataSource/profile.datasource";
import { InsertProfileUseCase } from "../../core/useCases/insertProfile.useCase";

module.exports.handler = async (event) => {
  const  body  = JSON.parse(event.body)
    const result = await new InsertProfileUseCase(new ProfileDatabase(),new LinkedinDataSource()).execute(body?.url)
    return {
      statusCode: 200,
      body: JSON.stringify(
        result,
        null,
        2
      ),
    };
  };
