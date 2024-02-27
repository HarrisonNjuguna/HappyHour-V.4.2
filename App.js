import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import * as Location from 'expo-location';
import BottomTab from './app/navigation/BottomTab';
import { UserLocationContext } from './app/context/UserLocationContext';
import { ShopContext } from './app/context/ShopContext';
import { UserReversedGeoCode } from './app/context/UserReversedGeoCode';
import DrinskNavigator from './app/navigation/DrinksNavigator';
import ShopPage from './app/navigation/ShopPage';
import Shop from './app/screens/Shops/Shop';
import AddRating from './app/screens/AddRating';
const Stack = createNativeStackNavigator();

export default function App() {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [shopObj, setShopObj] = useState(null);
  const [error, setErrorMsg] = useState(null);


  const defaultAddresss = { "city": "Shanghai", "country": "China", "district": "Pudong", "isoCountryCode": "CN", "name": "33 East Nanjing Rd", "postalCode": "94108", "region": "SH", "street": "Stockton St", "streetNumber": "1", "subregion": "San Francisco County", "timezone": "America/Los_Angeles" }

  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  });


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    (async () => {
      setAddress(defaultAddresss);

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location as denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location)
    })();
  }, [])

  if (!fontsLoaded) {
    // Return a loading indicator or splash screen while fonts are loading or app is initializing
    return;
  }

  return (
    <UserLocationContext.Provider value={{ location, setLocation }}>
      <UserReversedGeoCode.Provider value={{ address, setAddress }}>
      <ShopContext.Provider value={{ shopObj, setShopObj }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='bottom-navigation'
              component={BottomTab}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name='drink-nav'
              component={DrinskNavigator}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name='shop-page'
              component={ShopPage}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name='shop'
              component={Shop}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name='rating'
              component={AddRating}
              options={{ headerShown: false }}
            />


          </Stack.Navigator>
        </NavigationContainer>
        </ShopContext.Provider>
      </UserReversedGeoCode.Provider>
    </UserLocationContext.Provider>

  );
}
