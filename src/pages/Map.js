import React, { Component,} from 'react';
import '../css/Map.css';
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from '../components/LocationInfoBox'
import "../css/LocationMarker.css"

const getSensorData = require("../API/sensorData").getSensorData;


class Map extends Component {
  static defaultProps = {
    center: {
      lat: 49.2827,
      lng: -123.1207
    },
    zoom: 11
  };


  constructor(props){
    super(props);
    this.state = {data: [{incidentNum: 0, coordinates: [{longitude: -123.1207,latitude: 49.2827}]}]}
    var alldata =[]
    this.infoClick= this.infoClick.bind(this);
    
    
    getSensorData().then(item => {
      item.data.map(alert => {
        alldata.push(alert)
      })
      
      this.state.data=alldata
      console.log(this.state.data)
      this.forceUpdate();
      //console.log("updated")
      //console.log(this.state.data[0].coordinates[0].latitude)
    })
  }
  

  infoClick(id){
    console.log('Click happened');
    this.setState(state => ({
      id: id
    }))
    console.log(id)
  }


  render() {
    return (
      <div className="mapContainer">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAChc-w8pscsRgaW5t1S2jyHLNzRVpOO9c' }}
          defaultCenter={{lat: this.state.data[0].coordinates[0].latitude, lng: this.state.data[0].coordinates[0].longitude} }
          defaultZoom={this.props.zoom}
        >                
          {this.state.data.map(item =>{
              //console.log(item.coordinates[0].latitude)
              return( <LocationMarker 
                lat={item.coordinates[0].latitude} 
                lng={item.coordinates[0].longitude} 
                onClick={() =>this.infoClick({in: item.incidentNum, id: item.coordinates[0]._id, time: item.coordinates[0].time})}
                className = "location-marker"
                />
              )
              
            })}

        </GoogleMapReact>

        {this.state.id && <LocationInfoBox info={this.state.id} />}  
      </div>
    );
  }
}

export default Map;
