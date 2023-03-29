import React from 'react';
import {View} from "react-native";
import {center} from "../styles/globalStyles";

type Props = {
  children: React.ReactNode
}

export const CStack = ({children} : Props) => {
  return (
    <View style={center.center}>
      {children}
    </View>
  )
}