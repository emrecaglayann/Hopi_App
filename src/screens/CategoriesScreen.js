// CategoriesScreen.js
import React from 'react';
import { ScrollView , StyleSheet } from 'react-native';
import TopBar from "../components/TopBar"; 
import Search from '../components/Search';
import { View, Text } from 'react-native';
import Tag1 from '../components/Tag1';
import Marka from '../components/Marka';
import CategoryHome from './CategoryHome';
import CategoryBrand from './CategoryBrand';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <TopBar />
        <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarActiveTintColor: '#ffffff',
              tabBarInactiveTintColor: 'black',
              tabBarShowIcon: true,
              tabBarPressColor: '#ffffff',
              tabBarIndicatorStyle: {
                backgroundColor: '#e81f89',
                height: '80%',
                borderRadius: 30,
                marginBottom: 2,
                marginLeft: 12,
                width: '45%',
              },
              tabBarStyle: {
                backgroundColor: '#ffffff',
                elevation: 0,
                marginTop: 14,
                height: '6%',
              },
              tabBarLabelStyle: {
                fontSize: 12,
              },
            })}
          >
          <Tab.Screen name="CategoryHome" component={CategoryHome} 
          options={{
            tabBarLabel: 'Kategoriler',
            
          }}
          
          />
          <Tab.Screen name="CategoryBrand" component={CategoryBrand} 
          options={{
            tabBarLabel: 'Markalar',
            
          }}
          />
        </Tab.Navigator>
      </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
})
