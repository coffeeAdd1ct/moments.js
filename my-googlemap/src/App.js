import React, {Component} from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Map';
import Moment from './Moment';


const mapStyles = {
  width: '100%',
  height: '100%'
}

const marker = {
  title: 'test',
  description: '',
  scope: 'public',
  pageTypeId: '30',
  latlng: {lat: -25.344, lng: 131.036}
}

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return(
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={marker.title}
          position={marker.latlng}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}
export default GoogleApiWrapper ({
  apiKey: 'AIzaSyAZK2fbawNPGNgEZu8I59V_7ch_et-ckNs'
})(MapContainer);
