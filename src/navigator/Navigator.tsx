import React from 'react';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import { Movie } from '../interfaces/movieInterface';
import { NavigationProp } from '@react-navigation/native';


export type RootStackParams = {
  homeScreen: undefined,
  detailScreen: Movie,
}


declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParams {}
  }
}

const Stack = createStackNavigator<RootStackParams>();

export const  Navigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                // backgroundColor: 'white'
            }
        }}
      
      >
        <Stack.Screen name="homeScreen" component={HomeScreen} />
        <Stack.Screen name="detailScreen" component={DetailsScreen} />
      </Stack.Navigator>
    );
  }
