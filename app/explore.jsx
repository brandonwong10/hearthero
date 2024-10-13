import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

const Explore = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('index'); // Navigate to the home tab
  };

  const initialCards = [
    {
      image: require('../assets/images/grandma1.jpg'), 
      title: 'At-Risk Individual #1',
      subtitle: 'Risk Level: High',
      progress: new Animated.Value(0.7),
      riskColor: '#FF4C4C',
    },
    {
      image: require('../assets/images/grandpa1.png'),
      title: 'At-Risk Individual #2',
      subtitle: 'Risk Level: Medium',
      progress: new Animated.Value(0.5),
      riskColor: '#FFBF00',
    },
    {
      image: require('../assets/images/man1.png'),
      title: 'At-Risk Individual #3',
      subtitle: 'Risk Level: Low',
      progress: new Animated.Value(0.2),
      riskColor: '#4CAF50',
    },
  ];

  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prevCards => 
        prevCards.map(card => {
          const newProgress = Math.max(0, Math.min(1, card.progress._value + (Math.random() - 0.5) * 0.1));
          Animated.timing(card.progress, {
            toValue: newProgress,
            duration: 1000,
            useNativeDriver: false,
          }).start();
          return card;
        })
      );
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cards.map((card, index) => (
        <TouchableOpacity key={index} style={styles.card} onPress={handlePress}>
          <Image source={card.image} style={styles.image} />
          <View style={styles.cardText}>
            <Text style={styles.title}>{card.title}</Text>
            <Text style={styles.subtitle}>{card.subtitle}</Text>
            <View style={styles.progressBar}>
              <Animated.View style={[styles.progress, { width: card.progress.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%']
              }), backgroundColor: card.riskColor }]} />
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
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
    resizeMode: 'contain',
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
});

export default Explore;
