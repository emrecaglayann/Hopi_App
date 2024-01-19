import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TopBar from "../components/TopBar";
import Search from "../components/Search";  
import Shoping from "../components/Shoping"; 
import Shop from "../components/Shop"; 
import { ScrollView } from 'react-native';
const ShopingScreen = () => {
  return (
    <ScrollView>
        <TopBar />
        <Search/>
        <Shoping/>
        <Shop/>
    </ScrollView>
  )
}

export default ShopingScreen

const styles = StyleSheet.create({})