import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';

const screenWidth = Dimensions.get('window').width;

const Explore = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image source={require('../assets/images/grandma1.jpg')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.boxText}>At-Risk Individual #1</Text>
          <Text style={styles.riskText}>Risk Level: High</Text>
          <View style={[styles.riskBarContainer, { marginTop: 10 }]}>
            <View style={[styles.riskBar, { width: '90%' }]}></View>
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <Image source={require('../assets/images/grandpa1.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.boxText}>At-Risk Individual #2</Text>
          <Text style={styles.riskText}>Risk Level: Medium</Text>
          <View style={[styles.riskBarContainer, { marginTop: 10 }]}>
            <View style={[styles.riskBar, { width: '60%' }]}></View>
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <Image source={require('../assets/images/man1.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.boxText}>At-Risk Individual #3</Text>
          <Text style={styles.riskText}>Risk Level: Low</Text>
          <View style={[styles.riskBarContainer, { marginTop: 10 }]}>
            <View style={[styles.riskBar, { width: '30%' }]}></View>
          </View>
        </View>
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
    width: screenWidth * 0.9, // 90% of screen width
    height: 150,
    backgroundColor: '#FFFFFF', // Changed color to white
    marginVertical: 10, // Vertical margin
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 10 }, // Longer shadow offset
    shadowOpacity: 0.3, // Reduced initial shadow opacity
    shadowRadius: 10, // Increased shadow radius
    elevation: 10, // Increased elevation for Android
    borderRadius: 20, // Added rounded edges
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center', // Center items vertically
    paddingHorizontal: 20, // Horizontal padding
  },
  image: {
    width: 80, // Adjusted image width
    height: 80, // Adjusted image height
    marginRight: 20, // Space between image and text
    borderRadius: 10, // Rounded edges for images
    resizeMode: 'contain', // Ensure the image fits within the area
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  boxText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold', // Bold text
    fontFamily: 'Arial', // Nicer font
    marginTop: -10, // Move text up
  },
  riskText: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Arial', // Nicer font
  },
  riskBarContainer: {
    width: '100%',
    height: 10,
    backgroundColor: '#ddd', // Background color for the bar container
    borderRadius: 5,
    marginTop: 10, // Adjusted margin to move the bar down
  },
  riskBar: {
    height: '100%',
    backgroundColor: 'red', // Red color for the filling bar
    borderRadius: 5,
  },
});

export default Explore;
