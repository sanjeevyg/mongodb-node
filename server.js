

//1. import required modules and framework

const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app.js');


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


