import { StyleSheet, Text, View ,Image} from 'react-native';
import React from 'react';


const TopBar = () => {
  return (
    
    <View style={styles.container}>  
      <View style={styles.left}>
        <Image
            source= {require('../../assets/11.jpeg')}
            style={styles.image}
          /> 
      </View> 

      <View style={styles.middle}>
        <Image
            
            source= {require('../../assets/logo.png')}
            style={styles.image }
          /> 
      </View> 
      
      <View style={styles.right}>
        <Image
          source= {require('../../assets/0.jpeg')}
          style={styles.image}
        /> 
        <Image
          source= {require('../../assets/10.jpeg')}
          style={styles.image}
        /> 
      </View>

       
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    marginBottom:-10,
    // flex : 1,
    // paddingHorizontal: 16,
    // alignItems: "center", 
    // justifyContent:"space-between",
  },

  Image:{
    flex : 1,
    width : 20,
    height : 40 ,
    
  },

  right:{
    flexDirection:"row",
    flex:1,
    
  },

  left:{
    flex:1.1,
  },

  middle:{
    flex:1,
    marginTop:5,
  },
});