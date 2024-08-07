declare namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      MongoUrl: string;
      API_KEY: string;
      GOOGLE_CLIENT_ID:string;
      GOOGLE_CLIENT_SECRET:string;
    }
  }