import { Image,StyleSheet, Text, View } from 'react-native';
import React from 'react';


const Card = () => {
  return(
    <View style = {styles.container}>
      <Image style={styles.banner} source={require('../../assets/22.jpeg')}/>

    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
    container:{
        height: 200,
        width: 330,
        borderRadius: 16,
        backgroundColor: "gray",
    },

    banner:{
      height : "100%" ,
      width : "100%",
      resizeMode : "stretch"
    },
});


// export default Card

// const styles = StyleSheet.create({
//     container:{
//         height: 200,
//         width: 330,
//         borderRadius: 16,
//         backgroundColor: "gray",
//     },

//     banner:{
//       height : "100%" ,
//       width : "100%",
//       resizeMode : "stretch"
//     },
// });