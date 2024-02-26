import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import uidata from '../constants/uidata'
import { useState } from 'react'
import CategoryItem from './CategoryItem'

const CategoryList = ({setSelectedCategory, setSelectedSection, setSelectedValue}) => {
    const[selected, setSelected] = useState(null)
    const categories = [1,2,3,4,5];

    const handleSelectedCategory =(item) => {
        if(selected == item.value) {
          setSelectedCategory(null);
          setSelected(null);
          setSelectedSection(null);
          setSelectedValue(null);  
        } else {
        setSelectedCategory(item._id);
          setSelected(item.value);
          setSelectedSection('category');
          setSelectedValue(item.title); 
        }
    }
  return (
    <FlatList
    data={uidata.categories}
    showsHorizontalScrollIndicator={false}
    horizontal
    style={{marginTop: 10}}
    keyExtractor={(item) => item._id}
    renderItem={({item}) => 
    <TouchableOpacity onPress={() => handleSelectedCategory(item)}>
        <CategoryItem selected={selected} category={item}/>
    </TouchableOpacity>}
    />
  )
}

export default CategoryList

const styles = StyleSheet.create({})