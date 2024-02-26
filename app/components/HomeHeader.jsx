import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AssetImage from './AssetImage'
import { useContext, UseEffect } from 'react'
import { UserReversedGeoCode } from '../context/UserReversedGeoCode'
import { UserLocationContext } from '../context/UserLocationContext'
import { useEffect } from 'react'
import * as Location from 'expo-location'
import { useState } from 'react'

const HomeHeader = () => {
    const [time, setTime] = useState(null)
    const{address, setAddress} = useContext(UserReversedGeoCode);
    const{location, setLocation} = useContext(UserLocationContext);
    
    useEffect(() => {
        if(location !== null) {
            reverseGeoCode(location.coords.latitude, location.coords.longitude)
        }
    }, [location]);

    const reverseGeoCode = async (latitude, longitude) => {
        const reversedGeoCodedAddress = await Location.reverseGeocodeAsync({
            longitude: longitude,
            latitude: latitude
        });

         setAddress(reversedGeoCodedAddress[0]);
         const greeting = getTimeOfDay();
         setTime(greeting)
    };

    const getTimeOfDay = ()=> {
        const now = new Date();
        const hour = now.getHours();

        if(hour >= 0 && hour < 12) {
            return "☀️"
        }else if(hour >= 12 < 16){
            return "🌥️"
        }else{
            return "🌑"
        }
    };

  return (
    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <View style={styles.outerStyle}>
            <AssetImage data={require('../../assets/images/profile.jpg')}
                width={45}
                height={45}
                mode={'cover'}
                radius={90}
            />

            <View style={styles.headerStyle}>
                <Text style={styles.heading}>Delivering to:</Text>
                <Text style={styles.location}>{address.city} {address.name}</Text>
            </View>
        </View>  
        <Text style={{fontSize: 36, marginRight: 10}}>{time}</Text>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    outerStyle: {
        marginBottom: 10,
        marginHorizontal: 20,
        flexDirection: 'row'
    },
    headerStyle: {
        marginLeft: 15,
        justifyContent: "center"
    },
    heading: {
        fontFamily: 'medium',
        fontSize: 16,
        color: 'orange',
    },
    location: {
        fontFamily: 'regular',
        fontSize: 10,
        color: 'gray',
    }
})