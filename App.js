import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtomTabBar from './src/components/ButtomTabBar';
import "./i18n";
// SplashScreen.preventAutoHideAsync();


export default function App() {
  

  return ( <ButtomTabBar />)

}

const styles = StyleSheet.create({
  // container: { 
  //   // flex: 1,
  //   // backgroundColor: '#fff',
  //   // alignItems: 'center',
  //   // justifyContent: 'center', 
  // },
});
