import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.get('/', (req, res) => {
    return res.send('Hello Word 1');
})

app.use(routes);
app.listen(3333);