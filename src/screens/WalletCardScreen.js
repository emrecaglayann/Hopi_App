import React from 'react';
import { View, ScrollView,StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HopiCard from './HopiCard';
import MyCards from './MyCards';
import OtherCards from './OtherCards';

const Tab = createMaterialTopTabNavigator();

const WalletCardScreen = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: 'black',
          tabBarShowIcon: true,
          tabBarPressColor: '#ffffff',
          tabBarIndicatorStyle: {
            backgroundColor: '#00bf00',
            height: '90%',
            borderRadius: 20,
            
            marginLeft: 10,
            width: '27%',
          },
          tabBarStyle: {
            backgroundColor: '#ffffff',
            elevation: 0,
            marginBottom: 5,
            
          },
          tabBarLabelStyle: {
            fontSize: 10, 
            fontWeight: 'bold', 
          },
        })}
      >
        <Tab.Screen
          name="HopiCard"
          component={HopiCard}
          options={{
            tabBarLabel: 'HopiPay',
          }}
        />
        <Tab.Screen
          name="MyCards"
          component={MyCards}
          options={{
            tabBarLabel: 'Kartlarım',
          }}
        />
        <Tab.Screen
          name="OtherCards"
          component={OtherCards}
          options={{
            tabBarLabel: 'Diğer Kartlarım',
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 280,
    width: "auto",
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default WalletCardScreen;
