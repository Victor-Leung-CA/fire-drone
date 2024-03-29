var express = require('express');
var router = express.Router();
let sensorData = require('../models/sensorData');
var alertEvent = require('./SSE').event;

/**
 * GET method to retrieve all sensor data information
 * @module sensorData/GET
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
                    incidentNum: data.incidentNum,
                    coordinates: data.coordinates,
                    IFRStatus: data.IFRStatus,
                    alertStatus: data.alertStatus
                })));
            }
        })
        .catch((err) => {
            res.status(400).json(err.message);
        })
})

/**
 * GET method to retrieve sensor data information for a single incident
 * @module sensorData/GET
 * 
 * @param {number} incidentNum
 * 
 * @return {object} coordinates
 * @return {number} coordinates.longitude
 * @return {number} coordinates.latitude
 **/
router.get('/incident/:incidentNum', (req, res, next) => {
    sensorData.findOne({"incidentNum": req.params.incidentNum})
        .then(data => {
            if(data == null){
                res.status(406).json("Sensor data not available for incident " + req.params.incidentNum);
            }
            else{
                res.json(data);
            }
        })
        .catch((err) => {
            res.status(400).json(err.message);
        })
})

/**
 * GET method to retrieve number of incident numbers
 * @module sensorData/GET
 * 
 * @return {number} numAlerts
 **/
router.get('/count', (req, res, next) => {
    sensorData.estimatedDocumentCount((err,count) =>{
        if (err){ 
            console.log(err);
            res.status(400).json("err");

        }else{ 
            console.log(count);
            res.json(count);
        } 
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
    const incidentNum = req.body.incidentNum;
    const coordinates = req.body.coordinates;


    //Create new struct for data
    const newSensorData = new sensorData({
        incidentNum: incidentNum,
        coordinates: coordinates,
        IFRStatus: 0,
        alertStatus: 0
    });

    newSensorData.save()
        .then(() => {
            alertEvent.emit('alertUpdate');
            res.json("Data information appended!");
        })
        .catch(err => {
            res.status(400).json(err.message);
            console.log(message);
        })
});


/**
 * PUT method to update IFR status and alert status
 * @module sensorData/PUT
 * 
 * @param {number} incidentNum - Number to keep track of alert/ IFR
 * @param {number} IFRStatus
 * @param {number} alertStatus
 * 
 * @return {object} Sucess message
 * @return {object} Error message
 */
 router.put('/update_status', (req, res) => {
    //Assign request body input as new variables
    const incidentNum = req.body.incidentNum;

    //Update status variables
    if(req.body.IFRStatus !== undefined){
        sensorData.updateOne({incidentNum: incidentNum}, {$set: {IFRStatus: req.body.IFRStatus}})
            .then(() => {
                res.json("IFR Status updated!");
                alertEvent.emit('alertUpdate');
            });
    }
    else if(req.body.alertStatus !== undefined){
        sensorData.updateOne({incidentNum: incidentNum}, {$set: {alertStatus: req.body.alertStatus}})
            .then(() => {
                res.json("Alert Status updated!")
                alertEvent.emit('alertUpdate');
            });
    }
    else{
        res.json("Body field is not defined properly!");
    }
});

module.exports = router;