import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import {View} from "react-native";
import {Home} from "./Home";
import {Details} from "./Details";
import {Users} from "./Users";
import {Settings} from "./Settings";
import {RootStackParamList} from "../types/navigationTypes";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";

// const Stack = createNativeStackNavigator<RootStackParamList>()
// const Stack = createDrawerNavigator<RootStackParamList>()  // side nav panel
const Stack = createBottomTabNavigator<RootStackParamList>() // bottom nav panel

export const Main = () => {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Home'} component={Home}/>
        <Stack.Screen name={'Details'} component={Details}/>
        <Stack.Screen name={'Users'} component={Users}/>
        <Stack.Screen name={'Settings'} component={Settings}/>
      </Stack.Navigator>
    </View>
  )
}