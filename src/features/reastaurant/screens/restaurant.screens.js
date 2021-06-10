import React from 'react'
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import styled from 'styled-components/native';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Platform,
  FlatList
} from "react-native";
import {SafeArea} from '../../../../utilities/SafeArea'
import {RestaurantCard} from '../component/restaurant.card'
import {Searchbar} from 'react-native-paper'

const SearchBarContainer = styled.View`
padding:16px;
background-color:green

`
const RestaurantCardContainer = styled.View`
  flex:1;
  padding:16px;
  background-color:blue

`
const RestaurantLists =styled(FlatList).attrs({
  contentContainerStyle:{
    padding:0
  }
})`

`


export const RestaurantScreen = ()=>{

  return (
         <>
         <SafeArea >
        <SearchBarContainer >
          <Searchbar placeholder='Search'/>
        </SearchBarContainer>
        <RestaurantCardContainer>
        <RestaurantLists vertical data={[{name:1},{name:2},{name:4},{name:5},{name:6},{name:7}]} renderItem={()=><RestaurantCard />} keyExtractor={(item)=>item.name}
        
         />
          
        </RestaurantCardContainer>
      </SafeArea>
      <ExpoStatusBar style="auto" />



         </>

  )
}