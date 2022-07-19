import express from 'express';
import mongoose from 'mongoose';
require("dotenv").config();

const app = express();
const port = process.env.port || 3000;

const mongodb_uri = process.env.MONGODB_URI;

console.log(mongodb_uri);

if(mongodb_uri) {
    mongoose
        .connect(mongodb_uri)
        .then(() => {
            console.log("Connected To DB");
        })
        .catch (() => {
            console.log("Couldn't Connect To DB");
        })
} else {
    console.log("No mongodb_uri");
}

app.use(express.static('public'));

app.listen(port, () => {
    console.log("Server is running");
})