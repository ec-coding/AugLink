import mysql from "mysql";
import dotenv from 'dotenv';

dotenv.config({ path: './config/config.env' })

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

