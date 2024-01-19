import React from 'react';
import { View, StyleSheet, Image,TouchableOpacity  ,Text } from 'react-native';

const ShopCard = () => {
  const imagePaths = [
    require("../../assets/aaa.jpeg"),
    require("../../assets/bbb.jpeg"),
    require("../../assets/ccc.jpeg"),
    require("../../assets/ddd.jpeg"),
    require("../../assets/eee.jpeg"),
    // Diğer resim dosya yollarını ekleyin
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
    flexDirection: 'row',
  },
  card: {
    width: 360,
    height: 250,
    borderRadius: 16,
    overflow: 'hidden',
    marginHorizontal: 9,
    backgroundColor: '#fff', // Kart arka plan rengi
  },
  cardImage: {
    flex: 1,
    width: "%100",
    height: "%100",
    resizeMode:  "cover",
  },
  
});

export default ShopCard;

