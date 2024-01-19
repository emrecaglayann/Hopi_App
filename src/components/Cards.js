import { FlatList , StyleSheet, Text, View } from 'react-native';
import React, { useState } from "react";
import Card from "./Card";

const Cards = () => {
    const [activeDotIndex, setActiveDotIndex] = useState(0);
    const cards = [1, 2, 3, 4];
    const CARD_WIDTH = 346;
    return (
      <View>
        <FlatList
          // Kart listesi
          data={cards}
          // Render edilecek component (Card)
          renderItem={() => <Card />}
          // Listeleme için key
          keyExtractor={(item) => item.toString()}
          // Yatayda dizmek için
          horizontal={true}
          // Cardlar arası genişlik
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          // ListView'ın container stili
          contentContainerStyle={{ padding: 16 }}
          // Native scroll indicator'ı kaldırmak için
          showsHorizontalScrollIndicator={false}
          // Sayfalama yapması için
          pagingEnabled={true}
          // Card'ların yapışması için verdiğimiz array
          // CardWidth + ItemSeparatorComponent
          // 330 + 16 = 346
          // Yani bu piksellerde duracak
          // [346, 692, 1038, 1384, 1730, 2076, 2422, 2768, 3114]
          snapToOffsets={cards.map((_, i) => i * CARD_WIDTH)}
          // Hızlı kaydırma için
          decelerationRate={"fast"}
          // Scroll edildiğinde çalışır
          onScroll={(e) => {
            const newIndex = Math.round(
              e.nativeEvent.contentOffset.x / CARD_WIDTH
            );
            setActiveDotIndex(newIndex);
          }}
        />
        {/* Dots */}
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

export default Cards


const styles = StyleSheet.create({
    dotContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 4,
    },
    dot: {
      backgroundColor: "#efefef",
      width: 10,
      height: 10,
      borderRadius: 10,
      marginHorizontal: 2,
    },
    activeDot: {
      backgroundColor: "#666",
      // width: 48,
    },
  });