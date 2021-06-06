const fs = require('fs')

// const textIn = fs.readFileSync('./input.txt', 'utf-8')
// console.log(textIn)

// const textOut = `This s what we know about he avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./output.txt', textOut);
// console.log('File written')

const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const app = require('./app.js');

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);


mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log("DB connection succesful!"))

const port = process.env.PORT || 3000;
// const port = 3000 

app.listen(port, () => {
    console.log(`App running on port ${port}...`)
});


const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a price'],
        unique: true
    }, 
    rating: {
        type: Number, 
        unique: true,
        default: 4.5
    }, 
    price: {
        type: Number, 
        required: true
    }
});

const Tour = mongoose.model('Tour', tourSchema)


const testTour = new Tour({
    name: 'The Forest Hiker',
    price: 500,
    rating: 5
})

testTour.save().then(doc => {
    console.log(doc)
}).catch(error => {
    console.log({error: error.message})
})
