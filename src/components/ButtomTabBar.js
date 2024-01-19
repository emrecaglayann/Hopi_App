import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OfferScreen from '../screens/OfferScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import ShopingScreen from '../screens/ShopingScreen';
import WalletScreen from '../screens/WalletScreen';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

export default function ButtomTabBar() {
  const { t } = useTranslation();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerStyle:{height:30}}}>
        <Tab.Screen 
          name={t("Kampanyalar")}
          component={OfferScreen}  
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../../assets/712.png')}
                style={{ width: 44, height: 26 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name={t("Kategoriler")}
          component={CategoriesScreen} 
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../../assets/11.png')}
                style={{ width: 36, height: 36 }}
              />
            ),
          }}
        />
          

        <Tab.Screen 
          name={t("Alışveriş")}
          component={ShopingScreen} 
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../../assets/31.png')}
                style={{ width: 34, height: 30 }}
              />
            ),
          }}
        />
        <Tab.Screen 
          name={t("Cüzdan")}
          component={WalletScreen} 
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../../assets/21.png')}
                style={{ width: 34, height: 33 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}




























// import * as React from 'react';
// import { Text, View, Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// function OfferScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Kampanyalar!</Text>
//     </View>
//   );
// }

// function CategoryScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Kategoriler!</Text>
//     </View>
//   );
// }

// function ShopingScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Alışveriş!</Text>
//       </View>
//     );
// }

// function WalletScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Cüzdan!</Text>
//       </View>
//     );
// }
// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
        
//         <Tab.Screen 
//         name="Kampanyalar" 
//         component={OfferScreen}  
//         options={{
//             tabBarIcon: () => (
//               <Image
//                 source={require('../../assets/7.jpeg')} // Kampanyalar logosu
//                 style={{ width: 36, height: 36 }} // Logo boyutu
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//         name="Kategoriler" 
//         component={CategoryScreen} 
//             options={{
//                 tabBarIcon: () => (
//                 <Image
//                     source={require('../../assets/1.jpeg')} // Kampanyalar logosu
//                     style={{ width: 30, height: 36 }} // Logo boyutu
//                 />
//                 ),
//             }}
        
//         />
//         <Tab.Screen 
//         name="Alışveriş" 
//         component={ShopingScreen} 
//         options={{
//             tabBarIcon: () => (
//             <Image
//                 source={require('../../assets/3.jpeg')} // Kampanyalar logosu
//                 style={{ width: 36, height: 36 }} // Logo boyutu
//             />
//             ),
//         }}
//         />
//         <Tab.Screen 
//         name="Cüzdan" 
//         component={WalletScreen} 
//             options={{
//                 tabBarIcon: () => (
//                 <Image
//                     source={require('../../assets/2.jpeg')} // Kampanyalar logosu
//                     style={{ width: 30, height: 30 }} // Logo boyutu
//                 />
//                 ),
//             }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

