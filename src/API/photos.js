import axios from 'axios'

/**
 * Get method to retrieve a collection of photos for an incident
 * @param {number} incidentNum
 * @return {object} Photo collection
 */
const getPhotos = async (incidentNum) => {

    try{
        //Using local host for now, but we need to change this URL for production
        const response = await axios.get('http://localhost:5000/photos/' + incidentNum);
        console.log(response);
        return(response);
    } catch (error){
        console.log(error);
        return(error);
    }

}

export {getPhotos};