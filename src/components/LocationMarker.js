import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const LocationMarker = ({ lat, lng,alert,onClick }) => {

    if(alert===0){
        return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon0" />
        </div>
         )
    }

    else if(alert===1){
        return (
            <div className="location-marker" onClick={onClick}>
                <Icon icon={locationIcon} className="location-icon1" />
            </div>
        )
    }
    
    else{
        return (
            <div className="location-marker" onClick={onClick}>
                <Icon icon={locationIcon} className="location-icon2" />
            </div>
        )
    }
    
}

export default LocationMarker
