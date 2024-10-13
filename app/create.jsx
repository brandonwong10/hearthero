import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'

const Create = () => {
  const cards = [
    {
      image: require('../assets/images/grandma1.jpg'), 
      title: 'At-Risk Individual #1',
      subtitle: 'Risk Level: High',
      progress: 0.7,
      riskColor: '#FF4C4C',
    },
    {
      image: require('../assets/images/grandpa1.png'),
      title: 'At-Risk Individual #2',
      subtitle: 'Risk Level: Medium',
      progress: 0.5,
      riskColor: '#FFBF00',
    },
    {
      image: require('../assets/images/man1.png'),
      title: 'At-Risk Individual #3',
      subtitle: 'Risk Level: Low',
      progress: 0.2,
      riskColor: '#4CAF50',
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
              <View style={[styles.progress, { width: `${card.progress * 100}%`, backgroundColor: card.riskColor }]} />
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
    backgroundColor: '#F8F3F1',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 35,
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
    borderRadius: 5,
  },
})

export default Create;