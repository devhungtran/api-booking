const env = "development";

const config = {
  development: {
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URL,
    URL_SERVER: process.env.HOST,
    ZALO_APP_ID: process.env.ZALO_APP_ID,
    JWT_SECRET: process.env.ACCESS_TOKEN_SECRET,
    MINI_APP_ID: process.env.MINI_APP_ID,
    OA_TOKEN: process.env.OA_TOKEN,
  },
  production: {
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URL,
    URL_SERVER: process.env.HOST,
    ZALO_APP_ID: process.env.ZALO_APP_ID,
    MINI_APP_ID: process.env.MINI_APP_ID,
    OA_TOKEN: process.env.OA_TOKEN,
  },
};

module.exports = config[env];
