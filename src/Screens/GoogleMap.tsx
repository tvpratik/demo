/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  PermissionsAndroid,
  Platform,
  View,
  Button,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
export default function GoogleMap() {
  const [currentLongitude, setCurrentLongitude] = useState(22.2855168);
  const [currentLatitude, setCurrentLatitude] = useState(70.7723264);
  const [locationStatus, setLocationStatus] = useState(String);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);
  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = parseFloat(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = parseFloat(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      position => {
        //Will give you the location on location change

        setLocationStatus('You are Here');
        console.log(position);

        //getting the Longitude from the location json
        const currentLongitude = parseFloat(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = parseFloat(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Latitude state
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
  };
  return (
    <View style={{flex: 1}}>
      <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={{
          latitude: currentLatitude ?? 22.2855168,
          longitude: currentLongitude ?? 70.7723264,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        zoomEnabled={true}
        showsUserLocation={true}
        zoomControlEnabled={true}
        loadingEnabled={true}
        loadingIndicatorColor="#666666"
        loadingBackgroundColor="#eeeeee"
        moveOnMarkerPress={false}
        showsCompass={true}
        showsPointsOfInterest={false}
        provider="google">
        {locationStatus === 'You are Here' ? (
          <Marker
            coordinate={{
              latitude: currentLatitude ?? 22.2855168,
              longitude: currentLongitude ?? 70.7723264,
            }}
            title={'Address'}
            description={'test'}
          />
        ) : null}
      </MapView>
      <View style={{bottom: 0, position: 'absolute'}}>
        <Button title={locationStatus} onPress={getOneTimeLocation} />
      </View>
    </View>
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
