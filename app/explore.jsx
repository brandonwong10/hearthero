import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

// Import images from assets
import grandma1 from '../assets/images/grandma1.jpg';
import grandpa1 from '../assets/images/grandpa1.jpg';
import man1 from '../assets/images/man1.jpg';

const Explore = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image source={grandma1} style={styles.image} />
        <Text style={styles.boxText}>At-Risk Individual #1</Text>
      </View>
      <View style={styles.box}>
        <Image source={grandpa1} style={styles.image} />
        <Text style={styles.boxText}>At-Risk Individual #2</Text>
      </View>
      <View style={styles.box}>
        <Image source={man1} style={styles.image} />
        <Text style={styles.boxText}>At-Risk Individual #3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#94B9F6', // Darker background color
  },
  box: {
    width: 700, // Increased width
    height: 150,
    backgroundColor: '#FFFFFF', // Changed color to white
    margin: 15,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 10 }, // Longer shadow offset
    shadowOpacity: 0.3, // Reduced initial shadow opacity
    shadowRadius: 10, // Increased shadow radius
    elevation: 10, // Increased elevation for Android
    borderRadius: 20, // Added rounded edges
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center', // Center items vertically
    paddingLeft: 20, // Add padding to the left
  },
  image: {
    width: 50, // Image width
    height: 50, // Image height
    marginRight: 20, // Space between image and text
  },
  boxText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold', // Bold text
    fontFamily: 'Arial', // Nicer font
  },
});

export default Explore;
