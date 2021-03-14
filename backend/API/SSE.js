var express = require('express');
var router = express.Router();
let sensorData = require('../models/sensorData');
var events = require('events');

//Event objects
var countEvent = new events.EventEmitter();
var alertEvent = new events.EventEmitter();

//Global data
var count = 0; //test global count
var sensorDataCollection = [];

const updateData = () => {
    sensorData.find().then(item => {
        sensorDataCollection = item;
        alertEvent.emit('updated');
    })
}

updateData();

alertEvent.on('alertUpdate', () => {
    updateData();
})

router.get('/', (req, res, next) => {

    //Establishment of connection
    console.log("Recieved SSE connection request");
    var connection = 1; //Variable to keep track of connection

    //Headers to maintain SSE connection
    res.set({
        'Cache-Control': 'no-cache',
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        "Access-Control-Allow-Origin": "*"
    });
    res.flushHeaders();

    //Initial data package
    if(connection){
        res.write('event: countUpdate\n' + 'data:' + JSON.stringify(count) + "\n\n");
        res.write('event: alertUpdate\n' + 'data:' + JSON.stringify(sensorDataCollection) + "\n\n");
    }

    //Event based updates to clients
    countEvent.on('countUpdate', () => {
        if(connection){
            res.write('event: countUpdate\n' + 'data:' + JSON.stringify(count) + "\n\n");
        }
    });

    alertEvent.on('updated', () => {
        if(connection){
            res.write('event: alertUpdate\n' + 'data:' + JSON.stringify(sensorDataCollection) + "\n\n");
        }
    })

    //Client closes connection
    req.on('close', () => {
        if (connection) {
          res.end();
          console.log("Stopped sending events.");
          connection = 0;
        }
    });
});


//Post method to add new data
router.post('/add', (req, res, next) => {
    count++;
    countEvent.emit('countUpdate');
    console.log("Sending updated count: " + count);
    res.json("Count: " + count);
})

module.exports.sse = router;
module.exports.event = alertEvent;