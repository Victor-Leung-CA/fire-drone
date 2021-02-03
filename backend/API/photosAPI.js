var express = require('express');
var router = express.Router();
let photosModel = require('../models/photos');

router.post('/',(req, res, next) => {
    
    // const img = { 
    //                 time: req.body.time,
    //                 data: req.body.img.data,
    //                 dataType: 'image/png'
    //             }

    // const imgCollection = {

    // }
    
    photosModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.send("Photo successfully saved.");
        }
    });
});

modules.exports = router;