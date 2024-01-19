// Shop.js
import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ShopCard from './ShopCard';

const Shop = () => {
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const cards = [1, 2, 3, 4, 5]; // Örnek kart verileri
  const CARD_WIDTH = 380;

  return (
    <View>
      <FlatList
        data={cards}
        renderItem={({ item }) => <ShopCard cardNumber={item} />}
        keyExtractor={(item) => item.toString()}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        contentContainerStyle={{ padding: 16 }}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        snapToOffsets={cards.map((_, i) => i * CARD_WIDTH)}
        decelerationRate={'fast'}
        onScroll={(e) => {
          const newIndex = Math.round(e.nativeEvent.contentOffset.x / CARD_WIDTH);
          setActiveDotIndex(newIndex);
        }}
      />
      {/* Noktalar */}
      <View style={styles.dotContainer}>
        {cards.map((_, i) =>
          i === activeDotIndex ? (
            <View key={i} style={[styles.dot, styles.activeDot]} />
          ) : (
            <View key={i} style={styles.dot} />
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent:'center' ,
    alignItems:  "center",
    marginTop: 4,
  },
  dot: {
    backgroundColor: '#efefef',
    width: 10,
    height: 10,
    borderRadius: 10,
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: '#666',
  },
});

export default Shop;
