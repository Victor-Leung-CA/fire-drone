var express = require('express');
var router = express.Router();
let photosModel = require('../models/photos');
var multer  = require('multer');
var path = require('path');
var fs = require('fs');

//multer options
var imgPath = path.join(__dirname, '../images/')
const upload = multer({dest: imgPath})
var cpUpload = upload.fields([{ name: 'incidentNum', maxCount: 1 }, { name: 'photo'}])

/**
 * POST method for raspberry pi to send a collection of photos
 * @module photos/POST
 * 
 * @param {number} incidentNum - Number to keep track of alert/ IFR
 * @param {object[]} photos - Array of photos
 * @param {buffer} photos.data
 * @param {string} photos.contentType
 * 
 * @return {object} Success message
 * @return {object} Error message
 */
router.post('/', cpUpload ,(req, res, next) => {
    
    console.log("Recieved photo...")
    // console.log(req.files['photo'][0])
    // console.log(req.files['photo'][1])
    // console.log(req.files['photo'][2])
    console.log(req.files['photo'])
    // console.log(req.body['incidentNum']) // -> 0

    //Create a new document/ instance of a model

    var photoGallery = [];
    req.files['photo'].map((photo,index) => {
        photoElement = {
            data: fs.readFileSync(req.files['photo'][index].path),
            contentType: req.files['photo'][index].mimetype
        }
        photoGallery.push(photoElement)
    })

    const photoCollection = new photosModel({
        incidentNum: req.body['incidentNum'],
        photos: photoGallery
    })

    //Check if there are any duplicate incident numbers
    photosModel.findOne({'incidentNum': req.body.incidentNum})
        .then(searchedPhotoCollection => {
            if(searchedPhotoCollection != null){
                res.status(406).send({error: 'Incident number already exists'})
            }
            else{
                //Upload document to mongoDB database
                photoCollection.save()
                .then(() =>{
                    res.json("Photo collection saved successfully");
                })
                .catch(err => {
                    res.status(400).send(err.message)
                })
            }
        })
        .catch(err => {
            res.error(err.message)
        })

});


/**
 *  GET method to retrieve the desired photo collection.
 * @module photos/GET
 * @param {number} incidentNum - number to reference the alert/IFR
 * @return {object} photoCollection - Collection of photos
 * @return {object} Error message
 */
router.get('/:incidentNum',(req, res, next) => {
    
    photosModel.findOne({'incidentNum': req.params.incidentNum})
        .then(photoCollection => {
            if(photoCollection == null){
                res.status(406).json({error: "No photos found"})
            }
            else{
                res.json(photoCollection.photos.length);
            }
        })
        .catch(err => {
            res.error(err);
        })
})

/**
 *  GET method to retrieve the desired photo collection.
 * @module photos/GET
 * @param {number} incidentNum, photoNum - number to reference the alert/IFR
 * @return {object} photoCollection - Collection of photos
 * @return {object} Error message
 */
 router.get('/:incidentNum/:photoNum',(req, res, next) => {
    photosModel.findOne({'incidentNum': req.params.incidentNum})
        .then(photoCollection => {
            if(photoCollection == null){
                res.status(406).json({error: "No photos found"})
            }
            else if(req.params.photoNum < photoCollection.photos.length){
                res.set('Content-Type', 'image/png')
                res.send(photoCollection.photos[req.params.photoNum].data);
            }
            else{
                res.status(406).send("Incorrect photo index number!")
            }
        })
        .catch(err => {
            res.error(err);
        })
})

module.exports = router;