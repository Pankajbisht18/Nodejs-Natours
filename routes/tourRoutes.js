const express = require('express');
const tourController = require('./../controllers/tourController');
const router = express.Router();

//params middleware
router.param('id', tourController.checkID);

// Create a checkBody middleware
// Check if body contains the name and price property
// If not, send back 400 (Bad Request)
// Add it to the post handler stack

router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.checkBody, tourController.addTour);

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

module.exports = router;