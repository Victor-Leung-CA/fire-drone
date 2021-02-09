var express = require('express');
var router = express.Router();
let sensorData = require('../models/sensorData');

/**
 * GET method to retrieve all sensor data information
 * @module sensorData/GET
 * 
 * @param {number} incidentNum
 * 
 * @return {object} coordinates
 * @return {number} coordinates.longitude
 * @return {number} coordinates.latitude
 **/
router.get('/', (req, res, next) => {
    sensorData.find()
        .then(data => {
            if(data == null){
                res.status(406).json("No data available");
            }
            else{
                res.json(data.map(data => ({
                    missionName: data.missionName,
                    coordinates: data.coordinates, 
                })));
            }
        })
        .catch((err) => {
            res.status(400).json(err.message);
        })
})

/**
 * POST method for Raspberry Pi to post sensor data information after a completed mission
 * @module sensorData/POST
 * 
 * @param {number} incidentNum - Number to keep track of alert/ IFR
 * @param {object} coordinates
 * @param {number} coordinates.longitude
 * @param {number} coordinates.latitude
 * 
 * @return {object} Sucess message
 * @return {object} Error message
 */
router.post('/', (req, res) => {
    //Assign request body input as new variables
    const missionName = req.body.missionName;
    const coordinates = req.body.coordinates;

    //Create new struct for data
    const newSensorData = new sensorData({
        missionName,
        coordinates
    });

    newSensorData.save()
        .then(() => {
            res.json("Data information appended!")
        })
        .catch(err => {
            res.status(400).json(err.message)
        })
});

module.exports = router;