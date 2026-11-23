import dotenv from "dotenv";
import path from "path";

dotenv.config({path:path.join(process.cwd(), ".env")});

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  app_url: process.env.APP_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET || process.env.JWT_RERESH_SECRET || "accesssecret",
  jwt_refresh_secret: process.env.JWT_RERESH_SECRET || "refreshsecret",
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN || process.env.JWT_RERESH_EXPIRES_IN || "1d",
  jwt_refresh_expires_in: process.env.JWT_RERESH_EXPIRES_IN || "7d",
};