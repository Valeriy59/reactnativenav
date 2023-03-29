import React from 'react'
import {Text, View} from "react-native"
import {useAppNavigation} from "../types/navigationTypes";
import {Button} from "../components/Button";
import {CStack} from "../components/CStack";

export const Registration = (props: any) => {
  const navigation = useAppNavigation()
  return (
    <CStack>
      <Text>Registration</Text>
      <Button
        title={'Go to Profile'}
        fontSize={20}
        fontWeight={'500'}
        color={'red'}
        onPress={() => {navigation.navigate('Home', {screen: 'Profile'})}}
      />
    </CStack>
  )
}