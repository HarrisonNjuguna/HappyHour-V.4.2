import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import uidata from '../constants/uidata'
import DrinkComponent from './DrinkComponent'

const FeaturedBrands = () => {
    const renderItem= ({item}) => (
        <DrinkComponent item={item} onPress={() =>{}}/> 
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

export default FeaturedBrands

const styles = StyleSheet.create({})