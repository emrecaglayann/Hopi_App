import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'

const Action = () => {
    return(
        <View style = {styles.container}>
          <Image style={styles.banner} source={require('../../assets/6.jpeg')}/>
    
        </View>
      );
}

export default Action;

const styles = StyleSheet.create({
    container:{
        height: 200,
        width: 150,
        marginBottom:25,
        borderRadius: 16,
        backgroundColor: "gray",
    },

    banner:{
      height : "100%" ,
      width : "100%",
      resizeMode : "stretch"
    },
});