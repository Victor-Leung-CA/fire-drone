var express = require('express');
var router = express.Router();
let sensorData = require('../models/sensorData');

/*Get request - Allows users to get all the sensor data information
 * missionName: string
 * coordinates: array of numbers [long, lat]
 * windSpeed: number
*/
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
                    subTeam: data.subTeam
                })));
            }
        })
        .catch((err) => {
            res.status(400).json(err.message);
        })
})

/*Post request - Allows Raspberry Pi to post sensor data information after a completed mission
 * missionName: string
 * coordinates: array of numbers [long, lat]
 * windSpeed: number
*/
router.post('/add', (req, res) => {
    //Assign post request body input as new variables
    const missionName = req.body.missionName;
    const coordinates = req.body.coordinates;
    const windSpeed = req.body.windSpeed;

    //Create new struct for data
    const newSensorData = new sensorData({
        missionName,
        coordinates,
        windSpeed
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