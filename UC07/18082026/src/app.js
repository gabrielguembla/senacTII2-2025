import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import cards from '../db.json' with { type: 'json'};

// import cardsRouters from '../routers/cardsRouters.js'
const app = express();

app.use(express.json());

// app.use('/livros', cardsRouters);


export const cardList = (req, res) => {

    res.json(cards);

};


app.get('/cards', cardList);

export default app;









