import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 34.664855,
      lng: 135.562132
    },
    zoom: 17
  }

  renderMarkers(map, maps) {
    new maps.Marker({
      position: this.props.center,
      map,
      title: ''
    });
  }

  render() {
    return (
      <div className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
        >
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMap