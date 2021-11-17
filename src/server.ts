import 'dotenv/config';
import express from 'express';
import './databases';
import cors from 'cors';
import routes from './routes';
//import error from './middlewares/error';
import config from './config/server';

const app = express();
const port = config.server.port;

app.use(cors());
app.use(express.json());
app.use(routes);
//app.use(error);

app.listen(port, () => console.log('Server started'));


/*
import 'dotenv/config';
import express from 'express';
import './database';
import cors from 'cors';
import routes from './routes';
import config from './config/server';

const app = express();
const port = config.server.port;

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(port,()=>console.log('Server started'));


import 'dotenv/config';
import express from 'express';
import './databases';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333, () => console.log('Server started'));

/* teste teste PR */
