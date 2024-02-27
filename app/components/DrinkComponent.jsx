import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import NetworkImage from './NetworkImage'
import { COLORS, SIZES } from '../constants/theme'

const DrinkComponent = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        <NetworkImage 
        source={item.imageUrl[0]}
        width={SIZES.width-60}
        height={SIZES.height/5.8}
        radius={16}
        mode={'cover'}/>
        <Text style={styles.heading}>{item.title}</Text>
        <Text style={styles.details}>{item.time} - delivery time</Text>
    </TouchableOpacity>
  )
}

export default DrinkComponent

const styles = StyleSheet.create({
    wrapper: {
        marginRight: 15,
        backgroundColor: COLORS.lightwhite,
        padding: 8,
        borderRadius: 16
    },
    heading: {
        fontSize: 14,
        fontFamily: 'regular',
        color: COLORS.gray
    },
    details: {
        fontSize: 12,
        fontFamily: 'regular',
        color: COLORS.gray
    }
})