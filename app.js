const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan')
const fs = require('fs')
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
)

app.use(morgan('dev'))

// app.use('/posts', () => {
//     console.log('This is a middleware running!')
// })

// const port = 3000

app.use(express.json())


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

// app.listen(3000, () => {
//     console.log(`listening to port ${port}`)
// })



// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://yogi:mC7yuJBnxiMXpF20@cluster0.nen5a.mongodb.net/node-mongodb-05-Jun-21?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// const password = mC7yuJBnxiMXpF20

// // mongodb+srv://yogi:<password>@cluster0.7c31p.mongodb.net/test


// const fs = require('fs')

// const textIn = fs.readFileSync('./input.txt', 'utf-8')
// console.log(textIn)

// const textOut = `This s what we know about he avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./output.txt', textOut);
// console.log('File written')

module.exports = app