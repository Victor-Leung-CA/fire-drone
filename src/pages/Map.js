import React, { Component } from 'react';
import '../css/Map.css';
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

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
    this.state = {data: [[{longitude: -123.1207,latitude: 49.2827}]]}
    var coordinates = []

    getSensorData().then(item => {
      item.data.map(alert => {
        coordinates.push(alert.coordinates)
      })
      this.state.data=coordinates
      console.log(this.state.data)
      this.forceUpdate();
      console.log("updated")
      console.log(this.state.data[0][0].longitude)
    })

  }



  render() {
    return (
      <div className="mapContainer">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAChc-w8pscsRgaW5t1S2jyHLNzRVpOO9c' }}
          defaultCenter={{lat: this.state.data[0][0].latitude, lng: this.state.data[0][0].longitude} }
          defaultZoom={this.props.zoom}
        >
                    
          { 
            this.state.data.map(item =>{
              console.log(item)
              return( <LocationMarker lat={item[0].latitude} lng={item[0].longitude} />)
            }) 
          }
                                               
                       
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
