import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import pages from './page.style'
import uidata from "../constants/uidata";
import HomeHeader from "../components/HomeHeader";
import CategoryList from "../components/CategoryList";
import { useState } from "react";
import ChoicesList from "../components/ChoicesList";
import Heading from "../components/Heading";
import Divider from "../components/Divider";
import NearbyShops from "../components/NearbyShops";
import NewDrinksList from "../components/NewDrinksList";
import FeaturedBrands from "../components/FeaturedBrands";


const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedSection, setSelectedSection] = useState(null)
  const [selectedValue, setSelectedValue] = useState(null)
  const [selectedChoice, setSelectedChoice] = useState(null)
  

  return (
    <SafeAreaView>
      <View style={pages.viewOne}>
        <View style={pages.viewTwo}>
          <HomeHeader />

        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{borderBottomEndRadius: 30, borderBottomStartRadius:30}}>

          <CategoryList 
          setSelectedCategory={setSelectedCategory}
          setSelectedSection={setSelectedSection}
          setSelectedValue={setSelectedValue}
          />

          <ChoicesList
          setSelectedChoice={setSelectedChoice}
          setSelectedSection={setSelectedSection}
          />

          <View>
            <Heading heading={'Nearby Liqour shops'} onPress={() =>{}}/>

            <NearbyShops />
            <Divider />

            <Heading heading={'Drink-spiration to start with'} onPress={() =>{}}/>

            <NewDrinksList/>

            <Divider />

            <Heading heading={'Featured Brands'} onPress={() =>{}}/>

            <FeaturedBrands/>
          </View>
        </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  
});
