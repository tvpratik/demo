/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
export default function GoogleMap() {
  const [position, setPosition] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(pos => {
      console.log(pos);
      const crd = pos.coords;
      setPosition({
        latitude: parseFloat(crd.latitude),
        longitude: parseFloat(crd.longitude),
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      });
    }),
      error => this.setState({error: error.message}),
      {enableHighAccuracy: false, timeout: 200000, maximumAge: 1000};
  }, []);

  return (
    <MapView
      style={styles.map}
      //specify our coordinates.
      initialRegion={position}
      zoomEnabled={true}
      showsUserLocation={true}
      zoomControlEnabled={true}>
      <Marker
        coordinate={{
          latitude: position.latitude,
          longitude: position.longitude,
        }}
        title={'Address'}
        description={'test'}
      />
    </MapView>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
