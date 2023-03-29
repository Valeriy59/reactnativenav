import React from 'react'
import {Text, View} from "react-native"
import {Button} from "../components/Button";
import {NestedStack, useAppNavigation} from "../types/navigationTypes";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Profile} from "./Profile";
import {Login} from "./Login";
import {Registration} from "./Registration";

const Stack = createNativeStackNavigator<NestedStack>()

export const Home = (props: any) => {
  const navigation = useAppNavigation()

  return (
    <View style={{flex: 1}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Profile'} component={Profile}/>
        <Stack.Screen name={'Login'} component={Login}/>
        <Stack.Screen name={'Registration'} component={Registration}/>
      </Stack.Navigator>
    </View>
  )
}

