import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Create, Profile, Timeline } from '../pages';
import { RootStackParamList } from './RouteParamList';
import { colors } from "../config/colors";

const Tab = createBottomTabNavigator<RootStackParamList>();

function Router() {

  return (
      <Tab.Navigator  screenOptions={({ route }) => ({
        tabBarIconStyle: { display: "none"},
        tabBarActiveTintColor: colors.main,
        tabBarInactiveTintColor: colors.b,
        tabBarLabelPosition: 'beside-icon',
        headerShown: false
      })}>
        <Tab.Screen name="TimeLine" component={Timeline} />
        <Tab.Screen name="Create" component={Create} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}

export default Router;
