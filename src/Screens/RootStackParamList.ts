import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Initial: undefined;
  Signin: undefined;
  Signup: undefined;
  Name: undefined;
  Date: undefined;
  Workout: undefined;
  Success: undefined;
};

export type InitialScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Initial'
>;
