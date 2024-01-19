import { StyleSheet, Text, Image, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

const CategoryHome = () => {
  const imagePaths = [
    require("../../assets/a.jpeg"),
    require("../../assets/b.jpeg"),
    require("../../assets/c.jpeg"),
    require("../../assets/d.jpeg"),
    require("../../assets/e.jpeg"),
    require("../../assets/f.jpeg"),
    require("../../assets/g.jpeg"),
    require("../../assets/h.jpeg"),
    require("../../assets/l.jpeg"),
    require("../../assets/m.jpeg"),
    require("../../assets/n.jpeg"),
    require("../../assets/o.jpeg"),
    require("../../assets/p.jpeg"),
    require("../../assets/r.jpeg"),
    require("../../assets/s.jpeg"),
    // Diğer resim dosya yollarını da ekleyin
  ];

  const handleImagePress = (index) => {
    // Burada resme tıklanınca yapılacak işlemleri ekleyebilirsiniz
    console.log(`Image ${index + 1} pressed`);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {imagePaths.map((imagePath, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleImagePress(index)}
          >
            <Image style={styles.banner} source={imagePath} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  banner: {
    height: 150,
    width: 175,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 16,
    backgroundColor: 'gray',
  },
});

export default CategoryHome;
