import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import uidata from '../constants/uidata'
import DrinkComponent from './DrinkComponent'
import { useNavigation } from '@react-navigation/native'

const NewDrinksList = () => {
    const navigation = useNavigation ()
    const renderItem= ({item}) => (
        <DrinkComponent item={item} onPress={() => navigation.navigate('drink-nav', item)}/> 
    )
  return (
    <View style={{marginLeft: 12, marginBottom: 10}}>
        <FlatList data={uidata.foods}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 5, rowGap: 10}}
        scrollEnabled
        renderItem={renderItem}
    />
    </View>
  )
}

export default NewDrinksList

const styles = StyleSheet.create({})