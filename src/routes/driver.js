'use strict';

const express = require('express');

const router = express.Router();
const {driver} = require('../models/driver.models');
// add routes
router.get('/driver', getDriver);
router.get('/driver/:id', getOneDriver);
router.post('/driver', createDriver);
router.put('/driver/:id', updateDriver);
router.delete('/driver/:id', deleteDriver);


let getDriver = async (req, res)=> {
  
    let driver = await driver.findAll();
    res.status(200).json(driver);
}

let getOneDriver = async (req, res)=> {
    const id = parseInt(req.params.id); 
    let driver = await driver.findOne({ where: {id: id} });
    res.status(200).json(driver);
}

let createDriver = async (req, res)=> {
    let newDriver = req.body;
    let driver = await driver.create(newDriver);
    res.status(200).json(driver);
}

let updateDriver = async (req, res)=> {
    let id = parseInt(req.params.id);
    let body = req.body;
    let found = await driver.findOne({ where: {id: id} });
    let updatedDriver = await found.update(body);
    res.status(200).json(updatedDriver);
}

let deleteDriver = async (req,res)=> {
    let id = parseInt(req.params.id);
    let deletedDriver = await driver.destroy({where: {id: id}});
    res.status(204).json(deletedDriver);
}



module.exports = router;