import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'

const Create = () => {
  const cards = [
    {
      image: require('../assets/images/Heart-Beating-PNG-File.png'), 
      title: 'Pulse Monitor',
      subtitle: 'Activity',
      progress: 0.7,
    },
    {
      image: require('../assets/images/blood-pressure.png'),
      title: 'Blood Pressure',
      subtitle: 'Resource',
      progress: 0.5,
    },
    {
      image: require('../assets/images/siren.png'),
      title: 'Report Incident',
      subtitle: 'Activity',
      progress: 0.2,
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cards.map((card, index) => (
        <View key={index} style={styles.card}>
          <Image source={card.image} style={styles.image} />
          <View style={styles.cardText}>
            <Text style={styles.title}>{card.title}</Text>
            <Text style={styles.subtitle}>{card.subtitle}</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: `${card.progress * 100}%` }]} />
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    background: '#F8F3F1',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15,
    resizeMode:"contain",
  },
  cardText: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  progressBar: {
    height: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  progress: {
    height: '100%',
    backgroundColor: '#94B9F6',
    borderRadius: 5,
  },
})

export default Create;