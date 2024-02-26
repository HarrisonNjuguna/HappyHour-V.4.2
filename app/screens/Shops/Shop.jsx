import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShopPage from '../../navigation/shopPage'
import NetworkImage from '../../components/NetworkImage'
import { SIZES } from '../../constants/theme'
import { useRoute } from '@react-navigation/native'

const Shop = ({navigation}) => {
    const route = useRoute();
    const item = route.params;
console.log(item);
  return (
    <View>
      <NetworkImage 
      data={item.imageUrl} 
      height={SIZES.height/3.4} 
      width={SIZES.width} 
      radius={15}
      />

    <View style={{height: 200}}></View>

      <View style={{height: 400}}>
        <ShopPage />
      </View>
    </View>
  )
}

export default Shop

const styles = StyleSheet.create({})