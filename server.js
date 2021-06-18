

//1. import required modules and framework

const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const app = require('./app.js');


// 2. Connect to the database 

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

//3. Create Port 

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App running on port ${port}...`)
});

//4. Create Schema and import it

const tourSchema = require('./models/tourModel.js')



//5. Create Model, add new instance in collection and save to check if modeling is working

const Tour = mongoose.model('Tour', tourSchema)

const testTour = new Tour({
    name: 'The Mountain Climber',
    price: 500,
    rating: 4.9
})

testTour.save().then(doc => {
    console.log(doc)
}).catch(error => {
    console.log({error: error.message})
})


//6. Routes

app.get('/api/v1/tours', (request, response) => {
    database('users')
        .select()
        .returning('*')
        .then(tours => {
            response.json({tours})
        }).catch(error => {
            console.error({error: error.message})
        })

    
})

app.get('/api/v1/tours', (request, response) => {
    database('users')
        .select()
        .returning('*')
        .then(tours => {
            response.json({tours})
        }).catch(error => {
            console.error({error: error.message})
        })

    
})

