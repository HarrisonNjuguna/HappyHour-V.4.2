import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import uidata from '../constants/uidata'
import StoreComponent from './StoreComponent'
import { useNavigation } from '@react-navigation/native'
import { ShopContext } from '../context/ShopContext'

const NearbyShops = () => {
  const navigation = useNavigation();
  const {shopObj, setShopObj} = useContext(ShopContext)
  return (
    <View style={{marginLeft: 12}}>
     <FlatList data={uidata.restaurants}
     horizontal
     showsHorizontalScrollIndicator={false}
     style={{marginTop: 5, rowGap: 10}}
     scrollEnabled
     renderItem={({item}) => (
        <StoreComponent item={item} onPress={()=> {navigation.navigate('shop', item),setShopObj(item) }}/>
     )}
     />
    </View>
  )
}

export default NearbyShops

const styles = StyleSheet.create({})