import { NativeStackScreenProps } from "@react-navigation/native-stack"
import {NavigationProp, NavigatorScreenParams, useNavigation} from "@react-navigation/native";

export type RootStackParamList = {
  Home: NavigatorScreenParams<NestedStack>
  Details: {
    id: number
    name: string
  } | undefined
  Users: undefined
  Settings: undefined
}

export type NestedStack = {
  Profile: undefined
  Login: undefined
  Registration: undefined
}

export type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>

type UseNavigationType = NavigationProp<RootStackParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>()