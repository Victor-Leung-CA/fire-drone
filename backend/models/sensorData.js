const mongoose = require('mongoose');

//Schema object
const Schema = mongoose.Schema;

const sensorDataSchema = new Schema({
    missionName: {
        type: String
    },
    coordinates: {
        type: [Number]
    },
    windSpeed: {
        type: Number,
    }
}, {
        timestamps: true
});

//Compile model from schema
const sensorDataModel = mongoose.model('sensorDataModel', sensorDataSchema);

module.exports = sensorDataModel;