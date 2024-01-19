import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Action from './Action'


const Actions = () => {
  return (
    <View style = {styles.container}>
      <Action/>
      <Action/>
    </View>
  )
}

export default Actions


const styles = StyleSheet.create({

    container:{
        flexDirection:"row",
        justifyContent : "space-around"
    },
});