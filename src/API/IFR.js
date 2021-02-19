import axios from 'axios'

/**
 * Get method to retrieve all IFR reports
 * @return {object} IFRCollection
 */
const getIFR = async () => {

    try{
        //Using local host for now, but we need to change this URL for production
        const response = await axios.get('http://localhost:5000/IFR');
        console.log(response);
        return(response);
    } catch (error){
        console.log(error);
        return(error);
    }

}

/**
 * Get method to retrieve an IFR report
 * @param {number} incidentNum
 * @return {object} IFR
 */
const getOneIFR = async (incidentNum) => {

    try{
        //Using local host for now, but we need to change this URL for production
        const response = await axios.get('http://localhost:5000/IFR/' + incidentNum);
        console.log(response);
        return(response);
    } catch (error){
        console.log(error);
        return(error);
    }

}

/**
 * Get method to retrieve an IFR report
 * @param {number} incidentNum
 * @return Response Message
 */
const updateIFR = async (updatedIFR) => {

    try{
        //Using local host for now, but we need to change this URL for production
        const response = await axios.put('http://localhost:5000/IFR', updatedIFR);
        console.log(response);
        return(response);
    } catch (error){
        console.log(error);
        return(error);
    }

}

export {getIFR, getOneIFR, updateIFR};