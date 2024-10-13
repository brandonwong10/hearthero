import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';

const Home = () => {
  const [locationData, setLocationData] = useState({ longitude: null, latitude: null });
  const mapRef = useRef(null); // Create a reference for the MapView
  const radius = 1000; // Radius in meters

  useEffect(() => {
    fetch("http://localhost:5000/location")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        if (data.longitude && data.latitude) {
          setLocationData(data);

          // Animate to the new region when location data is fetched
          if (mapRef.current) {
            mapRef.current.animateToRegion(
              {
                latitude: data.latitude,
                longitude: data.longitude,
                latitudeDelta: 0.0922, // Adjust as needed
                longitudeDelta: 0.0421, // Adjust as needed
              },
              1000 // Animation duration in milliseconds
            );
          }
        } else {
          console.error("Invalid location data:", data);
        }
      })
      .catch(error => {
        console.error("Error fetching location:", error);
      });
  }, []);

  // Set initial region based on location data or fallback to default values
  const initialRegion = {
    latitude: locationData.latitude || 37.78825, // Fallback to default latitude
    longitude: locationData.longitude || -122.4324, // Fallback to default longitude
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // Function to generate random points within the radius
  const generateRandomPointsWithinRadius = (latitude, longitude, radius, count) => {
    const points = [];
    while (points.length < count) {
      const angle = Math.random() * 2 * Math.PI; // Random angle
      const distance = Math.random() * radius; // Random distance within the radius

      // Calculate new coordinates
      const newLatitude = latitude + (distance / 111000) * Math.sin(angle); // Approximation: 1 degree latitude ~ 111 km
      const newLongitude = longitude + (distance / (111000 * Math.cos(latitude * Math.PI / 180))) * Math.cos(angle); // 1 degree longitude varies by latitude

      points.push({ latitude: newLatitude, longitude: newLongitude });
    }
    return points;
  };

  // Function to generate random points outside the radius
  const generateRandomPointsOutsideRadius = (latitude, longitude, radius, count) => {
    const points = [];
    while (points.length < count) {
      // Generate random offsets
      const latOffset = (Math.random() - 0.5) * 0.02; // Adjust this value for a larger area
      const lonOffset = (Math.random() - 0.5) * 0.02; // Adjust this value for a larger area

      // Calculate new coordinates
      const newLatitude = latitude + latOffset;
      const newLongitude = longitude + lonOffset;

      // Calculate distance from the original point
      const distance = getDistanceFromLatLonInMeters(latitude, longitude, newLatitude, newLongitude);

      // Check if the distance is greater than the specified radius
      if (distance > radius) {
        points.push({ latitude: newLatitude, longitude: newLongitude });
      }
    }
    return points;
  };

  // Helper function to calculate distance between two latitude/longitude points
  const getDistanceFromLatLonInMeters = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; // Radius of the Earth in meters
    const φ1 = lat1 * Math.PI / 180; // φ in radians
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in meters
  };

  // Generate 2 random blue points within the radius and 2 gray points outside the radius
  const blueMarkers = generateRandomPointsWithinRadius(locationData.latitude, locationData.longitude, radius, 2);
  const grayMarkers = generateRandomPointsOutsideRadius(locationData.latitude, locationData.longitude, radius, 2);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef} // Attach the reference to the MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={true} // Optional: to show user location if available
      >
        {locationData.latitude && locationData.longitude && (
          <Marker
            coordinate={{
              latitude: locationData.latitude,
              longitude: locationData.longitude,
            }}
            title="Device Location"
            description="This is the current location of the device."
            pinColor='red'
          />
        )}
        
        {blueMarkers.map((marker, index) => (
          <Marker
            key={`blue-${index}`}
            coordinate={marker}
            title="Blue Point"
            description="This is a randomly generated point within the radius."
            pinColor='blue'
          />
        ))}

        {grayMarkers.map((marker, index) => (
          <Marker
            key={`gray-${index}`}
            coordinate={marker}
            title="Random Point"
            description="This is a randomly generated point outside the radius."
            pinColor='gray'
          />
        ))}
        
        {/* Circle to represent the radius around the red marker */}
        <Circle
          center={{
            latitude: locationData.latitude || 0,
            longitude: locationData.longitude || 0,
          }}
          radius={radius} // Radius in meters
          strokeColor="rgba(255, 0, 0, 0.5)" // Circle border color
          fillColor="rgba(255, 0, 0, 0.1)" // Circle fill color
        />
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
