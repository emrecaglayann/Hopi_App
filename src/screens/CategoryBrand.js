import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Linking  } from 'react-native';
import React from 'react';
import Search from '../components/Search';
import Tag1 from '../components/Tag1';
import Marka from '../components/Marka';

const CategoryBrand = () => {
    


  return (
    <ScrollView>
        <Search/>
        <Tag1/>
        <Marka/>
    </ScrollView>
  )
}

export default CategoryBrand

const styles = StyleSheet.create({})