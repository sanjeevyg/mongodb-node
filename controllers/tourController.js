// const fs = require('fs');
const Tour = require('./..models/tourModel')

// const tours = JSON.parse(
    //     fs.readFileSync(`${_dirname}/../dev-data/data/tours-simple.json`)
    // );
    
    // exports.checkID = (req, res, next, val) => {
        //     console.log(`Tour id is: ${val}`);
        
        //     if(req.params.id * 1 > tours.length) {
            //         return res.status(404).json({
                //             status: 'fail',
                //             message: 'Invalid ID'
                //         });
                //     }
                //     next();
                // };

//1. Create Create Method
                
exports.createTour = (req, res) => {
    try {
        const newTour = await Tour.create(req.body);
        
        res.status(201).json({
            status: 'sucess',
            // requestedAt: req.requestTime
            // results: tours.length,
            data: {
                tours
            }
        })
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data sent!'
        })
    }
};

exports.getAllTours = async (req, res) => {
    // console.log(req.requestTime);
    const newTour = await Tour.create(req.body);
    
    res.status(200).json({
        status: 'sucess',
        // requestedAt: req.requestTime
        // results: tours.length,
        data: {
                tours
            }
    })
}

exports.getTour = (req, res) => {
    console.log(req.params);
    const id = req.params.id + 1;

    // const tour = tours.find(el => el.id === id);

    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    });
};


exports.updateTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<updated tour here...>'
        }
    })
}

exports.deteleTour = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    });
};