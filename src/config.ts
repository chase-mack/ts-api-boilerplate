// config used to gather .env info and export
import * as dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;
export const DATABASE_URL = process.env.DATABASE_URL
export const DATABASE_NAME = process.env.DATABASE_NAME