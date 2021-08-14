'use strict';

const express = require('express');

const {car} = require('../models/car.models');
const router = express.Router();
// add routes



let getCar = async (req, res)=> {
  
    let car = await car.findAll();
    res.status(200).json(car);
}

let getOneCar = async (req, res)=> {
    const id = parseInt(req.params.id); 
    let car = await car.findOne({ where: {id: id} });
    res.status(200).json(car);
}

let createCar = async (req, res)=> {
    let newCar = req.body;
    let car = await car.create(newCar);
    res.status(200).json(car);
}

let updateCar = async (req, res)=> {
    let id = parseInt(req.params.id);
    let body = req.body;
    let found = await car.findOne({ where: {id: id} });
    let updatedDriver = await found.update(body);
    res.status(200).json(updatedDriver);
}

let deleteCar = async (req,res)=> {
    let id = parseInt(req.params.id);
    let deletedCar = await car.destroy({where: {id: id}});
    res.status(204).json(deletedCar);
}

router.get('/car', getCar);
router.get('/car/:id', getOneCar);
router.post('/car', createCar);
router.put('/car/:id', updateCar);
router.delete('/car/:id', deleteCar);


module.exports = router;