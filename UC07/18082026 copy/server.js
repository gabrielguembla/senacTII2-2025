import express from 'express';
import dotenv from 'dotenv';
import app from './src/app.js';

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running in ${PORT} port.`);

});







