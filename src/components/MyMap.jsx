import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAWKZD9Gq69EX1kiAJ8V2OCZXeLJR0QyYE&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px', width: '100%' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)((props) => {
  const [coords, setCoords] = useState({
    lat: 42.66578186819769,
    lng: 23.370389852708698,
  });

  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: coords.lat, lng: coords.lng }}>
      {props.isMarkerShown && (
        <Marker
          draggable
          onDragEnd={(e) => {
            setCoords({
              lat: e.latLng.lat(),
              lng: e.latLng.lng(),
            });
            props.onMarkerChange(e.latLng.lat(), e.latLng.lng());
          }}
          position={{ lat: coords.lat, lng: coords.lng }}
        />
      )}
    </GoogleMap>

  );
});

export default MyMapComponent;
