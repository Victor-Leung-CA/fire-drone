const mongoose = require('mongoose');

//Schema object
const Schema = mongoose.Schema;

const coordinates = new Schema({
    longitude: Number,
    latitude: Number,
    time: Number
})

const sensorDataSchema = new Schema({
    incidentNum: {
        type: Number,
        unique: true,
        required: true
    },
    coordinates: [coordinates]
}, {
        timestamps: true
});

//Compile model from schema
const sensorDataModel = mongoose.model('sensorDataModel', sensorDataSchema);

module.exports = sensorDataModel;