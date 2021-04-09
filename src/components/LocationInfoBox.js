const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Event Location Info</h2>
            <ul>
    <li>Incident Number: <strong>{ info.in }</strong></li>
    <li>ID: <strong>{ info.id }</strong></li>
    <li>Time: <strong>{ info.time }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
