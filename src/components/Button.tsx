import React from 'react';
import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from "react-native";

type Props = {
  title: string
  fontSize: number
  fontWeight: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined
  color: string
} & TouchableOpacityProps

export const Button = ({title, fontSize, fontWeight, color, ...restProps}: Props) => {
  return (
    <TouchableOpacity {...restProps}>
      <Text style={[styles.title, {fontSize, fontWeight, color}]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {},
  title: {},
})