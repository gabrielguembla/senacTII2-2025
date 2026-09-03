import express from 'express';
import dotenv from 'dotenv';
// import cards from './db.json'; 
import cardsRouters from '../routers/cardsRouters.js'

const app = express();

app.use(express.json());

app.use('/livros', cardsRouters);

export default app;









