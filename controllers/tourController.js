// const fs = require('fs');
const Tour = require('./../models/tourModel');

//Get Dev data
// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

// exports.checkID = (req, res, next, val) => {
//     if(req.params.id * 1 > tours.length){
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID'
//         })
//     }
//     next();
// }

//get all tours from db
exports.getAllTours = async (req, res) => {
    try {
        const tours = await Tour.find();
        res.status(200).json({
            status: 'success',
            results: tours.length,
            data:{
                tours
            }
        });
    } 
    catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
}; 

//get a single tour from db
exports.getTour = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data:{
                tour
            }
        })
    } 
    catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
};

//create tour in DB
exports.createTour = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body);
        res.status(200).json({
            status: 'Success',
            data: {
                tour: newTour
            }
        })
    } 
    catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: error
        })    
    }
};

// update a tour
exports.updateTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'Success',
            data: {
                tour
            }
        })
    } 
    catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error 
        })
    }
};

//delete a tour
exports.deleteTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: 'Success',
            data: {
                message: 'Data Deleted Successfully'
            }
        })
    } 
    catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error
        })    
    }
};