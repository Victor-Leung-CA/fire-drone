import React, { Component } from 'react';
import '../css/Map.css';
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 49.2827,
      lng: -123.1207
    },
    zoom: 11
  };

  render() {
    return (
      <div className="mapContainer">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAChc-w8pscsRgaW5t1S2jyHLNzRVpOO9c' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <LocationMarker
            lat={49.2827}
            lng={-123.1207}
            
          />
          
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
