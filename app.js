const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.use('/posts', () => {
    console.log('This is a middleware running!')
})


app.get('/', (request, response) => {
    response.send('We are home!')
})

app.get('/posts', (request, response) => {
    response.send('We are on post!')
})
app.listen(3000)

