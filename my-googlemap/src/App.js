import React, {Component} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
}

export class MapContainer extends Component {
  render() {
    return(
      <Map google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233
        }}
      />
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//
//       </header>
//     </div>
//   );
// }
//
// export default App;

export default GoogleApiWrapper ({
  apiKey: 'AIzaSyAZK2fbawNPGNgEZu8I59V_7ch_et-ckNs'
})(MapContainer);
