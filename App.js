
import React from "react";
import {Text} from 'react-native'
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructures/theme'
import {RestaurantScreen} from './src/features/reastaurant/screens/restaurant.screens'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SafeArea} from './utilities/SafeArea'
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const TAB_ICON={
  Restaurant:'md-restaurant',
  Map:'md-map',
  Settings:'md-settings'
}

const screenOptions=({route})=>{

    const iconName = TAB_ICON [route.name]

  return (
     {tabBarIcon:({size,color})=><Ionicons name={iconName} size={size} color={color} />
,}

  )

}
const SettingsScreen =()=>{
return(
 <Text > SettingsScreen </Text>
)
}

const Map =()=>{
return(
 <Text > Map </Text>
)
}

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });


  return (
    <>
    <ThemeProvider theme={theme} >
    <SafeArea>
    <NavigationContainer>
      <Tab.Navigator   
      screenOptions={screenOptions}
      tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      
      >
      
        <Tab.Screen name="Restaurant" component={RestaurantScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Map" component={Map} />
                
      </Tab.Navigator>
    </NavigationContainer>
    </SafeArea>

    </ThemeProvider>
    </>
  );
}

