import React from 'react';
import { View, StyleSheet, Image,TouchableOpacity  ,Text } from 'react-native';

const WallCard = () => {
  const imagePaths = [
    require("../../assets/ab.jpeg"),
    require("../../assets/ac.jpeg"),
    require("../../assets/ad.jpeg"),
    require("../../assets/ae.jpeg"),
    require("../../assets/af.jpeg"),
    require("../../assets/ag.jpeg"),
    require("../../assets/ah.jpeg"),
    require("../../assets/aj.jpeg"),

  ];


  return (
    <TouchableOpacity  style={styles.container}>
      {imagePaths.map((imagePath, index) => (
        <View key={index} style={styles.card}>
          <Image style={styles.cardImage} source={imagePath} />
        </View>
      ))}
    </TouchableOpacity >
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
    width: 350,
    height: 100,
    borderRadius: 16,
    overflow: 'hidden',
    marginHorizontal: 12,
    backgroundColor: '#fff', // Kart arka plan rengi
  },
  cardImage: {
    flex: 1,
    width: "%100",
    height: "%100",
    resizeMode:"stretch",
  },
  
});

export default WallCard;

