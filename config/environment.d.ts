export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ELASTIC_PROFILE_INDEX: string
      EXTERNAL_API_TOKEN: string
      PROFILE_API_URL: string
      PROFILE_TABLE: string
    }
  }
}
