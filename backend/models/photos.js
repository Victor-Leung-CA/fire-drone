const mongoose = require('mongoose');
const multer = require('multer');

//Schema object
const Schema = mongoose.Schema;

//Instance of a photo
const photoSchema = new Schema({
    data: Buffer, //Store photo data
    contentType: String, //Indicate content type - e.g. png, jpeg
});

//Collection of photos
const photoCollectionSchema = new Schema({
    incidentNum: Number, //This number allows us to search for the appropriate collection of photos for IFR
    photos: [photoSchema]
});

//Compile model from schema
const photoCollectionModel = mongoose.model('photoCollectionModel', photoCollectionSchema);

module.exports = photoCollectionModel;