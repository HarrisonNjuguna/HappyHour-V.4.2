import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useRoute } from '@react-navigation/native'
import DrinksPage from '../screens/DrinksPage';
import OrderPage from '../screens/OrderPage';

const stack = createNativeStackNavigator();
const DrinksNavigator = () => {
    const route = useRoute()
    const item = route.params
  return (
    <stack.Navigator
    initialRouteName='drink-page'
    >
        <stack.Screen
        name='drink-page'
        component={DrinksPage}
        options={{headerShown: false}}
        initialParams={{item: item}}
        />

        <stack.Screen
        name='order-page'
        component={OrderPage}
        options={{headerShown: false, presentation: 'modal'}}
        />
        
    </stack.Navigator>
  )
}

export default DrinksNavigator

const styles = StyleSheet.create({})