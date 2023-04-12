import axios from "axios";
import { LinkedinProfileOutput } from "../presentation/dto/linkedin.profile.dto";
import { ProfileDatabase } from "./profile.datasource";

import { getConfig } from "../../config/config";

export class LinkedinDataSource {
    constructor(
        
    ) {
        
    }
    async getProfile(url: string): Promise<LinkedinProfileOutput> {
        
        const {data} = await axios.get<LinkedinProfileOutput>(getConfig().PROFILE_API_URL || "",{
            headers: {'Authorization': 'Bearer ' + getConfig().EXTERNAL_API_TOKEN || ""},
            params: {
                url
            }
        })
    
        return data
        

        
           
    }
}
