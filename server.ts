import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes';
import 'dotenv/config';

const app: express.Application = express();
const port = process.env.port || 3000;
const mongoURL = process.env.MONGO_URL;


app.use(express.json());
app.use(express.static('public'));

mongoose
    .connect(mongoURL)
    .then(() => {
        console.log(`Connected To DB`);
    })
    .catch(() => {
        console.log(`Failed Connect To DB`);
    })

app.use('/users', userRouter);
app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}/`);
});