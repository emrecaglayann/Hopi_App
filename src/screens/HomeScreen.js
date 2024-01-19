import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TopBar from "../components/TopBar"; 
import Cards from '../components/Cards';
import Tag from '../components/Tag';
import Actions from '../components/Actions';
import Search from '../components/Search';
import { ScrollView } from 'react-native';




const HomeScreen = () => {
  return (
    <ScrollView >

      <TopBar />
      <Search />
      <Cards />
      <Tag />
      <Actions/>
      
    </ScrollView>

    
  );
}; 

export default HomeScreen;
const styles = StyleSheet.create({});
  