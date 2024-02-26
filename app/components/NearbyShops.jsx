import { FlatList, StyleSheet, View} from 'react-native'
import React from 'react'
import uidata from '../constants/uidata'
import StoreComponent from './StoreComponent'
import { useNavigation } from '@react-navigation/native'

const NearbyShops = () => {
  const navigation = useNavigation();
  return (
    <View style={{marginLeft: 12}}>
      <FlatList data={uidata.restaurants}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{marginTop: 5, rowGap: 10}}
      scrollEnabled
      renderItem={({item}) => (
        <StoreComponent item={item} onPress={() => navigation.navigate('shop', item)}/>
        
      )}/>
    </View>
  )
}

export default NearbyShops

const styles = StyleSheet.create({})