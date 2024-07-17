import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {RootNavigate} from '.';
import {Login} from '../screen';

const Stack = createNativeStackNavigator();

export const Screens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}>
      <Stack.Screen name="Root" component={RootNavigate} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
