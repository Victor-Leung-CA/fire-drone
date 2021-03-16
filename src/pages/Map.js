import React from 'react';
import '../css/Map.css';



const Map = () => {
  return (
    <div className="map">
      <h2>Active Fire Map</h2>
    </div>
  )
}

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAChc-w8pscsRgaW5t1S2jyHLNzRVpOO9c' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
