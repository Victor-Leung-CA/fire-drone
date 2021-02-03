const mongoose = require('mongoose');

//Schema object
const Schema = mongoose.Schema;

//Instance of a photo
const photoSchema = new Schema({
    data: Buffer, //Store photo data
    dataType: String, //Indicate content type - e.g. png, jpeg
    time: String //Time photo was taken
});

const photoCollectionSchema = new Schema({
    incidentNum: {
        type: Number
    },
    photos: {
        type: [photoSchema] //Array of photo collection
    }
}, {
        timestamps: true //Time the photo collection was logged onto server
});

//Compile model from schema
const photoCollectionModel = mongoose.model('photoCollectionModel', photoCollectionSchema);

module.exports = photoCollectionModel;