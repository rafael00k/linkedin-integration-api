import 'dotenv/config';

export const getConfig = (): NodeJS.ProcessEnv => {
    return {
        ELASTIC_PROFILE_INDEX: process.env.ELASTIC_PROFILE_INDEX,
        EXTERNAL_API_TOKEN: process.env.EXTERNAL_API_TOKEN,
        PROFILE_API_URL: process.env.PROFILE_API_URL,
        PROFILE_TABLE: process.env.PROFILE_TABLE

    }
    
}
