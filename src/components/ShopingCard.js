import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity ,Text } from 'react-native';

const ShoppingCard = () => {
  const imagePaths = [
    require("../../assets/aa.jpeg"),
    require("../../assets/bb.jpeg"),
    require("../../assets/cc.jpeg"),
    require("../../assets/dd.jpeg"),
    require("../../assets/ee.jpeg"),
    require("../../assets/ff.jpeg"),
    require("../../assets/gg.jpeg"),
    require("../../assets/hh.jpeg"),
    // Diğer resim dosya yollarını ekleyin
  ];

  const cardContents = [
    " Arzum Ürünlerini Keşfet",
    " Kartsız Taksit Limitini Keşfet",
    " Milk&moo Ürünlerini Keşfet",
    " Gallery Crystal Hopi'nde ",
    " Astronut Ürünlerini Keşfet",
    " Yeni Favori Parfümünü Seç",
    " Sezonun En Moda Parçaları",
    " Çok Aranan",
    // Diğer kart içeriklerini ekleyin
  ];

  return (
    <View style={styles.container}>
      {imagePaths.map((imagePath, index) => (
        <TouchableOpacity  key={index} style={styles.card}>
          <Image style={styles.cardImage} source={imagePath} />
          <Text style={styles.cardText}>{cardContents[index]}</Text>
        </TouchableOpacity >
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
  },
  card: {
    width: 340,
    height: 500,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 20,
    backgroundColor: '#fff', // Kart arka plan rengi
  },
  cardImage: {
    flex: 1,
    width: 340,
    height: 500,
    resizeMode: 'cover',
  },
  cardText: {
    fontSize: 18,
    textAlign: "auto",
    paddingTop: 15,
  },
  
});

export default ShoppingCard;
