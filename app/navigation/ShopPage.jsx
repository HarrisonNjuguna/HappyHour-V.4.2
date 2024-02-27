import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Animated } from "react-native";
import { COLORS } from '../constants/theme';
import Menu from '../screens/Shops/Menu';
import Directions from '../screens/Shops/Directions';
import New from '../screens/Shops/New';

// Disabled Animated Listener
const av = new Animated.Value(0);
av.addListener(() => {return});

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }} />
);
const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }} />
  );

const renderScene = SceneMap({
  first: Menu,
  second: Directions,
  three: New,
});

const ShopPage = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Drinks Menu' },
    { key: 'second', title: 'Directions' },
    { key: 'three', title: 'New' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

export default ShopPage