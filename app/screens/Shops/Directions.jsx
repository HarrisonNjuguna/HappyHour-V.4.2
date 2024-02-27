import { Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ShopContext } from '../../context/ShopContext'
import { useContext } from 'react'
import GoogleMapsView from '../../components/GoogleMapsView'
import { COLORS,SIZES } from '../../constants/theme'

const Directions = () => {
  const {shopObj, setShopObj} = useContext (ShopContext)
  const coords = shopObj.coords;

  const onDirectionClick = () => {
    const url = Platform.select ({
      ios: 'maps:' + coords.latitude + ',' + coords.longitude,
      android: 'geo' + coords.latitude + ',' + coords.longitude + "?z=16",
    })
    Linking.openURL(url)
  }
  

  return (
    <View>
      <GoogleMapsView placeList={[coords]}/>

      <View style={{flexDirection:'row',justifyContent: 'space-between', alignItems: 'center',margin: 12,}}>
        <Text style={[styles.small, {width: SIZES.width/1.6}]}> {coords.address} </Text>

        <TouchableOpacity style={styles.ratingBtn} onPress={() => onDirectionClick()}>
          <Text> Directions </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Directions

const styles = StyleSheet.create({
  small: {
    fontSize: 13,
    fontFamily: 'regular',
    color: COLORS.gray,
  },
  ratingBtn: {
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 9,
    padding: 6,
  }
})