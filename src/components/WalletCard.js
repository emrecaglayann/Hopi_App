import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const WalletCard = ({ name,name1, name2,name3,name4,name5,name6,balance, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <Text style={styles.cardHeaderText}>{name}</Text>
      <View style={styles.iconContainer}>
        <Image source={require('../../assets/wallet-icon.png')} style={styles.walletIcon} />
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.balanceText}>{`${balance}`}</Text>
      </View>
      <View style={styles.cardHeader}>
      
      </View>
      <Text style={styles.cardText}>
      <Text style={styles.pinkText}>{name2}</Text>
      {name1}
      </Text>

      <Text style={styles.cardText1}>
      <Text style={styles.bluText}>{name4}</Text>
      {name3}
      </Text>

      <Text style={styles.cardText2}>
      <Text style={styles.greenText}>{name6}</Text>
      {name5}
      </Text>
      
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
 cardContainer: {
  backgroundColor: '#919191',
  borderRadius: 20,
  padding: 16,
  margin: 20,
  width: 380, 
  height: 200, 
},
pinkText: {
  color: '#ff56ff', // Pembe renk
},
bluText:{
  color: '#008ee0',
},
greenText:{
  color: '#03bf00',
},
cardText:{
  color: '#000000',
  fontSize: 15,
  fontWeight: 'bold',
},
cardText1:{
  color: '#000000',
  fontSize: 15,
  fontWeight: 'bold',
},
cardText2:{
  color: '#000000',
  fontSize: 15,
  fontWeight: 'bold',
},
  cardHeader: {
    borderBottomWidth: 2,
    borderBottomColor: '#ffffff',
    paddingBottom: 8,
    marginBottom: 15,
  },
  cardHeaderText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  walletIcon: {
    width: 50,
    height: 50,
  },
  cardBody: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceText: {
    color: '#000000',
    fontSize: 35,
    fontWeight:"900"
  },
});

export default WalletCard;


