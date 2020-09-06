import express from 'express';
import {CriarUser} from './routes';

const app = express();

app.get('/', CriarUser);

app.listen(3333);