import "bootstrap/dist/css/bootstrap.min.css";
import "../css/LocationInfoBox.css"

const LocationInfoBox = ({ info }) => {
    const onClick = (e) => {
        e.preventDefault();
        window.location.href = 'http://localhost:3000/edit-ifr/' + info.in;
    }

    return (
        <div className="location-info">
            <h2>Event Location Info</h2>
            <ul>
                <li>Incident Number: <strong>{ info.in }</strong></li>
                <li>Time: <strong>{ info.time }</strong></li>
            </ul>
            <button className="btn LocationInfoBoxBtn" onClick = {onClick}>Edit IFR</button>
        </div>
    )
}

export default LocationInfoBox
