"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
require("dotenv/config");
const app = express_1.default();
const port = process.env.port || 3000;
const mongoURL = process.env.MONGO_URL;
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
mongoose_1.default
    .connect(mongoURL)
    .then(() => {
    console.log(`Connected To DB`);
})
    .catch(() => {
    console.log(`Failed Connect To DB`);
});
app.use('/users', userRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}/`);
});
