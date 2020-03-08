import React, { Component } from 'react';

const API_KEY = "AIzaSyBMPZ6s2t5hjH7K-YgscmUH-NvGJLEulJA";

class GoogleMap extends Component {
  //Will be called once the component has been rendered
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render () {
    return <div ref="map" />;
  }
}

export default GoogleMap;
