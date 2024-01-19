import React from 'react';
import { View, StyleSheet } from 'react-native';
import WalletCard from "../components/WalletCard";

const Wallet = () => {
  const handleCardPress = () => {
    console.log('Card Pressed!');
  };

  return (
    <View style={styles.container}>
      <WalletCard 
        renderItem={() => <WalletCard/>}
        name="Toplam Paracık   " 
        name1="Paracık    " 
        name2="0.00  " 
        name3="Hediye Paracık  " 
        name4="3.250,00  " 
        name5="Akaryakıt Paracık    " 
        name6="0.00  " 
        balance="3.250.00  " 
        onPress={handleCardPress} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: 'center',
  },
});

export default Wallet;
