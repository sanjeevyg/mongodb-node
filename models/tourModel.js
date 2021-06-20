//4. Create Schema

const mongoose = require('mongoose')

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


//5. Create Model and export

const Tour = mongoose.model("Tour", tourSchema)

module.exports = Tour;