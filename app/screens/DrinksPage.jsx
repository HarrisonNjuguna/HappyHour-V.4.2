import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React from 'react'
import { useContext,useState } from 'react'
import { CartCountContext } from '../context/CartCountContext'
import { COLORS, SIZES } from '../constants/theme'
import {Ionicons, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import Counter from '../components/Counter'
import { useEffect } from 'react'


const DrinksPage = ({route, navigation}) => {
    const item = route.params.item
    const [isChecked, setIsChecked] = useState(false)
    const [additives, setAdditives] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [shop, setShop] = useState(1)
    const [count, setCount] = useState(1)
    const [preference, setPreference] = useState('')
    // const {cartCount, setCartCount} = useContext(CartCountContext)

    let sendToOrderPage;
    const id = item.shop

    const handleAdditives =(newAdditive) => {
        setAdditives((prevAdditives) => {
            const exists = prevAdditives.some(
                (additive) => additive.id === newAdditive.id
            )
            if(exists){
                return prevAdditives.filter(
                    (additive) => additive.id !== newAdditive.id
                )
            }else{
                return [...prevAdditives, newAdditive]
            }
        })
    }

    const handlePress =(item) => {
        const cartItem = {
            productId: item._id,
            additives: additives,
            quantity: count,
            totalPrice: (item.price + totalPrice) * count
        }
        addToCart(cartItem)
    }

    sendToOrderPage = {
        orderItem: {
            drinkId: item._id,
            additives: additives,
            quantity: count,
            instructions: preference,
            price: (item.price + totalPrice) * count,
        },
        title: item.title,
        description: item.description,
        imageUrl:item.imageUrl[0],
        shop: id
    }

    const addToCart = async(cartItem) => {}

    useEffect(() => {
        calculatePrice();
    }, [additives])

    const calculatePrice= () => {
        const total = additives.reduce((sum,additive) => {
            return sum + parseFloat(additive.price)
        },0)
        setTotalPrice(total)
    }

  return (
    <View style={{backgroundColor: COLORS.lightWhite, height: SIZES.height}}>
      
      <View>
        <Image source={{uri: item.imageUrl[0]}}
            style={{
                width: SIZES.width,
                height: SIZES.height/4,
                borderBottomRightRadius: 40,
                borderBottomLeftRadius: 40,
            }}
        />

        
        <TouchableOpacity onPress={()=> navigation.goBack()} 
        style={styles.backbtn}
        >
            <Ionicons name='chevron-back-circle' size={30} color={COLORS.primary}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> {}} 
        style={styles.sharebtn}
        >
            <MaterialCommunityIcons name='share-circle' size={30} color={COLORS.primary}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> {}} 
        style={{position: 'absolute', bottom: 20, right: 0}}
        >
            <View style={styles.shopbtn}>
                <Text style={styles.shopText}>View the Shop</Text>
            </View>
        </TouchableOpacity>
      </View>
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
                <Text style={[styles.title, {color: COLORS.primary}]}>
                    Ksh.{(item.price + totalPrice)* count}
                </Text>
            </View>

            <Text style={styles.small}>
                {item.description}
            </Text>

            <FlatList
                data={item.foodTags}
                showVerticalScrollIndicator={false}
                keyExtractor={(item) => item}
                style={{marginTop: 10}}
                horizontal
                scrollEnabled
                renderItem={({item}) => (
                    <View style={styles.tags}>
                       <Text style={{paddingHorizontal: 4, color: COLORS.lightWhite}}>{item}</Text> 
                    </View>
                )}
            />

            <Text style={[styles.title, {marginBottom: 10, marginTop: 20}]}>Additives & Extras</Text>

            <FlatList
                data={item.additives}
                showHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                style={{marginTop: 10}}
                scrollEnabled={false}
                renderItem={({item}) => (
                    <View style={{flexDirection:'row', justifyContent: 'space-between', marginBottom: 10}}>
                        <BouncyCheckbox
                            size={20}
                            unfillColor='#ffffff'
                            fillcolor={COLORS.primary}
                            innerIconStyle={{borderWidth: 1}}
                            textStyle={styles.small}
                            text={item.title}
                            onPress={() => {
                                handleAdditives(item);
                            }}
                        />
                       <Text style={styles.small}> Ksh.{item.price}</Text> 
                    </View>
                )}
            />

        <Text style={[styles.title, {marginBottom: 10, marginTop: 20}]}>
            Additional details
        </Text>

        <View style={styles.input}>
            <TextInput
                placeholder='Add delivery instructions'
                value={preference}
                onChangeText={() => setPreference(value)}
                autoCapitalize={'none'}
                autoCorrect={false}
                style={{flex: 1}}
            />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
              <Text style={[styles.title, {marginBottom: 10}]}>Quantity</Text> 
              <Counter count={count} setCount={setCount}/>     
        </View>    
        </View>

        <View style={{flex: 1, justifyContent:'flex-end'}}>
        <View style={styles.suspended}>
        <View style={styles.cart}>
        <View style={styles.cartRow}>
            <TouchableOpacity onPress={() => {}} style={styles.cartbtn}>
                    <AntDesign name='pluscircleo' size={24} color={COLORS.lightWhite}/>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor: COLORS.primary, paddingHorizontal: 80, borderRadius: 30}}
                onPress={() => navigation.navigate('order-page', sendToOrderPage)}
            >
                <Text style={[styles.title, {color: COLORS.lightWhite, marginTop: 8, alignItems: 'center'}]}>Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.cartbtn}>
                <Text style={[styles.title, {color: COLORS.lightWhite, marginTop: 3, alignItems: 'center'}]}>{0}</Text>  
            </TouchableOpacity>
            </View>
            </View>
           </View>   
        </View>
    </View>
  )
}

export default DrinksPage

const styles = StyleSheet.create({
    backbtn: {
        marginLeft: 12,
        allignItems: 'center',
        zIndex: 999,
        position:'absolute',
        top: SIZES.xxLarge,
    },
    sharebtn: {
        marginRight: 12,
        allignItems: 'center',
        zIndex: 999,
        right: 0,
        position:'absolute',
        top: SIZES.xxLarge+3,
    },
    shopbtn: {
        borderColor: COLORS.tertiary,
        backgroundColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 10, 
        padding: 10, 
        marginRight: 10
    },
    shopText: {
        color: COLORS.lightWhite,
        fontFamily: 'bold'
    }, 
    container: {
        marginHorizontal: 12,
        marginTop: 10,
    },
    title: {
        fontSize: 19,
        fontFamily: 'medium',
        color: COLORS.black
    },
    small: {
        fontSize: 13,
        fontFamily: 'regular',
        color: COLORS.gray,
        textAlign: 'justify',
    },
    tags: {
        right: 10, 
        marginHorizontal: 10, 
        backgroundColor: COLORS.primary, 
        borderRadius: 8,
    }, 
    input: {
        borderColor: COLORS.primary1,
        borderWidth: 1,
        backgroundColor: COLORS.offwhite,
        height:50,
        borderRadius: 8,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center'
    },
    suspended: {
        position: 'absolute',
        zIndex: 999,
        bottom: 50,
        width: '100%',
        alignItems: 'center'
    },
    cart: {
        width: SIZES.width -24,
        height: 60,
        justifyContent: 'center',
        backgroundColor:COLORS.primary1,
        borderRadius: 30,
    },
    cartRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginHorizontal: 12,
    },
    cartbtn: {
        width: 40,
        height: 40,
        borderRadius: 99,
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        alignItems: 'center'
    }
})