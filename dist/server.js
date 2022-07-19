"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config();
const app = express_1.default();
const port = process.env.port || 3000;
const mongodb_uri = process.env.MONGODB_URI;
console.log(mongodb_uri);
if (mongodb_uri) {
    mongoose_1.default
        .connect(mongodb_uri)
        .then(() => {
        console.log("Connected To DB");
    })
        .catch(() => {
        console.log("Couldn't Connect To DB");
    });
}
else {
    console.log("No mongodb_uri");
}
app.use(express_1.default.static('public'));
app.listen(port, () => {
    console.log("Server is running");
});
