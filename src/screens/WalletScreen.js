import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native';
import TopBar from '../components/TopBar'
import WalletCard from '../components/WalletCard';
import Wallet from '../components/Wallet';
import Wall from '../components/Wall';
import WalletCardScreen from './WalletCardScreen';

const WalletScreen = () => {
  return (
    <ScrollView>
      <TopBar/>
      <Wallet/>
      <Wall/>
      <WalletCardScreen/>
    </ScrollView>

    
  )
}

export default WalletScreen

const styles = StyleSheet.create({})