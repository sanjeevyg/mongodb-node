const express = require('experss');
const tourController =('./../controllers/tourController');

const router = express.Router();

// router.param('id', tourController.checkID);

router  
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.createTour);


router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.udpateTour)
    .delete(tourController.deleteTour)


module.exports = router;