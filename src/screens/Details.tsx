import React from 'react';
import {View, Text} from "react-native";
import {Button} from "../components/Button";
import {DetailsProps, useAppNavigation} from "../types/navigationTypes";
import {CStack} from "../components/CStack";

export const Details = ({route}: DetailsProps) => {
  const navigation = useAppNavigation()

  return (
    <CStack>
      <Text>Details</Text>
      {route.params && (<>
        <Text>{route.params.id}</Text>
        <Text>{route.params.name}</Text>
      </>)}
      <Button
        title={'Go to Users'}
        fontSize={20}
        fontWeight={'500'}
        color={'green'}
        onPress={() => {navigation.navigate('Users')}}
      />
    </CStack>
  );
}
