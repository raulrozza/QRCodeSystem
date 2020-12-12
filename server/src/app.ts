import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from 'routes';
import '../config';

const app = express();

mongoose
    .connect(process.env.MONGO_URL || '', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    })
    .catch(error => console.error('MongoDB error:', error));

app.use((() => cors())()); // Typescript does not accept cors() as an argument. So, I did this

app.use(express.json());

app.use(routes);

export default app;
