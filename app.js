const express = require('express');
const app = express();
// const mongoose = require('mongoose');
const morgan = require('morgan')
const Tour = require('./models/tourModel')

//import routers 
const tourRouter = require('./routes/tourRoutes'); 
// const userRouter = require('./routes/userRoutes');

//Middleware
app.use(morgan('dev'))
app.use(express.json())


app.use('/api/v1/tours', tourRouter);
// app.use('/api/v1/users', userRouter);


module.exports = app;