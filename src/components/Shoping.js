import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ShoppingCard from './ShopingCard';

const Shopping = () => {
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const cards = [1, 2, 3, 4 ,5 ,6 ,7 ,8]; // Örnek kart verileri
  const CARD_WIDTH = 360;

  return (
    <View>
      <FlatList
        data={cards}
        renderItem={() => <ShoppingCard />}
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
    alignItems: "'center'",
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
    // width: 48,
  },
});

export default Shopping;
