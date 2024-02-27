import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ShopContext } from '../../context/ShopContext';
import DrinkTile from '../../components/DrinkTile';
import { useContext } from 'react';
import uidata from '../../constants/uidata';

const New = () => {
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

export default New

const styles = StyleSheet.create({})