import express from "express";
import dotenv from 'dotenv';


import Connection from "./database/db.js";//extension likho
import Router from "./routes/route.js";

dotenv.config();

const app = express();

app.use('/',Router);


const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME,PASSWORD);