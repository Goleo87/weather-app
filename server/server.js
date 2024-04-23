import express from 'express';
import cors from 'cors';
import weatherRouter from './router/weather.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('simple weather app');
    })
//request to weather router
    app.use("/weather", weatherRouter);
const port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    });