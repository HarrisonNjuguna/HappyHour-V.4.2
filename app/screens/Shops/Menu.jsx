import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import DrinkTile from '../../components/DrinkTile';
import uidata from '../../constants/uidata';

const Menu = () => {
  const navigation = useNavigation();
  const {shopObj, setShopObj} = useContext(ShopContext)

  return (
    <View style={{marginTop: 5}}>
      <FlatList 
        data={uidata.foods}
        showsVerticalScrollIndicator={false}
        style={{marginTop: 5}}
        keyExtractor={(item) =>  item._id}
        scrollEnabled
        renderItem={({item}) => (
        <DrinkTile item={item} showDetails={() => navigation.navigate('drink-nav', item)}/>
        )}
      />
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({})