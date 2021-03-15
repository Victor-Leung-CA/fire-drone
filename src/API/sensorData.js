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
        console.log(error);
        return(error);
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
        return(response.data);
    } catch (error){
        return(error);
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
        return(response.data);
    } catch (error){
        return(error);
    }
}

export {getSensorData, getOneSensorData, getNumSensorData};