import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { COLORS } from '../constants/theme';
import uidata from '../constants/uidata';

const ChoicesList = ({setSelectedChoice, setSelectedSection}) => {
    const [selected, setSelected] = useState(null);

        const handlePress = (item) => {
            if(selected === item.value){
                setSelected(null)
                setSelectedChoice(null)
                setSelectedSection(null)
            }else{
                setSelected(item.value)
                setSelectedChoice(item.value)
                setSelectedSection('shop')
            }
        } 

  return (
    <View>
      <Text style={{
        marginLeft: 16,
        marginVertical: 12,
        fontSize: 18,
        fontFamily: 'bold'
      }}
      >Pick a Shop
      </Text>
      <FlatList
        data={uidata.choicesList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        scrollEnabled
        style={{marginTop: 5}}
        renderItem={({item})=> (
            <TouchableOpacity 
            onPress={() =>{handlePress(item)}}
            
            style={{
            backgroundColor: selected === item.value ? COLORS.secondary: COLORS.lightWhite, 
            height: 40,
            borderRadius:12,
            marginHorizontal: 8,
            justifyContent: 'center'
            }}
            >
                <Text style={{
                    marginHorizontal: 10,
                    fontFamily: 'regular',
                    fontSize:13,
                    color: item.value == selected ? COLORS.lightWhite: COLORS.gray
                }}>{item.name}</Text>

            </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default ChoicesList

const styles = StyleSheet.create({})