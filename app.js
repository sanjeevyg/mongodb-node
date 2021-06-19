const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan')

//Connection to local API
const fs = require('fs')
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
)

//import routers 
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

//Middleware
app.use(morgan('dev'))
app.use(express.json())


//Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);


//route handlers to be edited 
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours
    }
  });
});

app.post('/api/v1/tours', (req, res) => {
  console.log(req.body)
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({id: newId}, req.body)
  console.log(newTour)
  tours.push(newTour);
  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, 
  JSON.stringify(tours), 
  err => {
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    })
  })
  console.log('done')
})




module.exports = app