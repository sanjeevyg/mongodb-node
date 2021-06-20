const express = require('express');
// const {getAllTours} = ('../controllers/tourController');
const Tour = require('./../models/tourModel')

const router = express.Router();

// const Tour = require('./../models/tourModel')

//1. Create Create Method
                
const createTour = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body);
        
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        })
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data sent!'
        })
    }
};

const getAllTours = async (req, res) => {
    try {
        const tours = await Tour.find();
    
        res.status(200).json({
            status: 'success',
            results: tours.length,
            data: {
                tours
            }
        })
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}




const getTour = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {
                tour
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};

const updateTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<updated tour here...>'
        }
    })
}

const deteleTour = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    });
};



router  
    .route('/')
    .get(getAllTours)
    // .post(tourController.createTour);

// router
//     .route('/:id')
//     .get(tourController.getTour)
//     .patch(tourController.udpateTour)
//     .delete(tourController.deleteTour)


module.exports = router;