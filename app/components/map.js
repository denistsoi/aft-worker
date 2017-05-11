import React from 'react';
import mapstyles from './map-styles';
import mapboxgl from 'mapbox-gl';

class Map extends React.Component {
  componentDidMount() {
    var map = new mapboxgl.Map({
        container: 'map',
        style: mapstyles,
        center: [-122.517909004229,37.6041399900046]
    });

    map.fitBounds([
      [-122.517909004229,37.6041399900046], 
      [-122.354997990413,37.8324400092519]
    ]);
  }

  render() {
    return (
      <div>
        <div id='map'></div>
      </div>
    )
  }
}

export default Map;
