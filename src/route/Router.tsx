import React, { createContext, useMemo, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Create, Profile, Timeline } from '../pages';
import { RootStackParamList } from './RouteParamList';
import { colors } from "../config/colors";
import { CvContext} from '../store/Provider';
import { cv_list } from '../dummy/cv_list';

const Tab = createBottomTabNavigator<RootStackParamList>();

function Router() {

  return (
    <CvContext.Provider value={{ cv_list }}>
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
    </CvContext.Provider>
  );
}

export default Router;
