import axios from 'axios'

/**
 * Get method to retrieve sensor data for all incidents
 * @return {object} Sensor data collection
 */
const getSensorData = async () => {

    try{
        //Using local host for now, but we need to change this URL for production
        const response = await axios.get('http://localhost:5000/sensor-data');
        console.log(response);
        return(response);
    } catch (error){
        if (error.response) {
            throw new Error(error.response.status);
        }
        else if(error.request){
            throw new Error(error.request.status);
        }
        throw new Error(error.message);
    }

}

/**
 * Get method to retrieve sensor data for an incident
 * @param {number} incidentNum
 * @return {object} Sensor data collection
 */
const getOneSensorData = async (incidentNum) => {

    try{
        //Using local host for now, but we need to change this URL for production
        const response = await axios.get('http://localhost:5000/sensor-data/incident/' + incidentNum);
        console.log(response.data);
        return(response.data);
    } catch (error){
        if (error.response) {
            throw new Error(error.response.status);
        }
        else if(error.request){
            throw new Error(error.request.status);
        }
        throw new Error(error.message);
    }

}

/**
 * Get method to retrieve number of sensor data collections
 * @return {Number} Number of sensor data collections
 */
const getNumSensorData = async () => {
    try{
        //Using local host for now, but we need to change this URL for production
        const response = await axios.get('http://localhost:5000/sensor-data/count');
        console.log(response.data);
        return(response.data);
    } catch (error){
        if (error.response) {
            throw new Error(error.response.status);
        }
        else if(error.request){
            throw new Error(error.request.status);
        }
        throw new Error(error.message);
    }
}

export {getSensorData, getOneSensorData, getNumSensorData};