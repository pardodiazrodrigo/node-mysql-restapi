import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 4000;
export const DB_URI = {
	host: process.env.DB_HOST || "localhost",
	user: process.env.DB_USER || "root",
	password: process.env.DB_PASSWORD || 2404,
	port: process.env.DB_PORT || 3306,
	database: process.env.DB_DATABASE || "companydb",
};
