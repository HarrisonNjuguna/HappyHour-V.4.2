import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import uidata from '../constants/uidata'
import CategoryFoodComp from './CategoryFoodComp'
import { useNavigation } from '@react-navigation/native'


const HomeCategories = () => {
    const navigation = useNavigation();

    const renderCategoryItem = ({item}) => (
        <CategoryFoodComp item={item} onPress={()=>{}}/>
    );
  return (
    <View style={{marginLeft: 12, marginBottom: 12}}>
      <FlatList 
      data={uidata.foods}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item._id}
      style={{marginTop: 10}}
      scrollEnabled={false}
      renderItem={renderCategoryItem}
      />
    </View>
  )
}

export default HomeCategories
