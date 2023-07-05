import bodyParser from "body-parser";
import mongoose from "mongoose";
import {signupRouter} from "./route/router.js";
import cors from 'cors';
import express from "express";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;
app.use(bodyParser.json());
app.use(signupRouter);

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/signup", () => {
    console.log("connected to database");
});

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});