import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Home = () => {
  // Array of markers with coordinates and details
  const markers = [
    {
      id: 1,
      coordinate: { latitude: 37.78825, longitude: -122.4324 },
      title: 'Victim',
      description: 'N/A',
      pinColor: 'blue'
    },
    {
      id: 2,
      coordinate: { latitude: 37.78925, longitude: -122.4354 },
      title: 'Victim',
      description: 'High Risk',
      pinColor: 'red'
    },
    {
      id: 3,
      coordinate: { latitude: 37.79025, longitude: -122.4384 },
      title: 'User',
      description: 'N/A',
      pinColor: 'blue'
    },
    // Add more markers as needed
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825, // Example latitude
          longitude: -122.4324, // Example longitude
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map(marker => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            pinColor={marker.pinColor} // Customize marker color if needed
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Home;
