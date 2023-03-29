import React from 'react'
import {Text, View} from "react-native"
import {Button} from "../components/Button";
import {useAppNavigation} from "../types/navigationTypes";
import {CStack} from "../components/CStack";

export const Login = (props: any) => {
  const navigation = useAppNavigation()
  return (
    <CStack>
      <Text>Login</Text>
      <Button
        title={'Go to Registration'}
        fontSize={20}
        fontWeight={'500'}
        color={'red'}
        onPress={() => {navigation.navigate('Home', {screen: 'Registration'})}}
      />
    </CStack>
  )
}