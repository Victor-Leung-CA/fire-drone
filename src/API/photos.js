import axios from 'axios'

/**
 * Get method to retrieve information about photos for an incident num
 * @param {number} incidentNum
 * @return {object} Photo collection
 */
const getPhotoInfo = async (incidentNum) => {

    try{
        //Using local host for now, but we need to change this URL for production
        const response = await axios.get('http://localhost:5000/photos/' + incidentNum);
        return(response.data);
    } catch (error){
        console.log(error);
        return(error);
    }

}

export {getPhotoInfo};