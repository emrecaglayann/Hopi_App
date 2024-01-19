import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HopiCard = () => {
  const imagePath = require("../../assets/1245.jpeg");

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={imagePath} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  card: {
    marginTop: 10,
    width: 360,
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    marginHorizontal: 12,
    backgroundColor: '#fff', // Kart arka plan rengi
  },
  cardImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
});

export default HopiCard;
