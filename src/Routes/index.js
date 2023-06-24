import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from "@react-navigation/native";

import Preload from "../screens/public/Preload";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const MainNavigation = createNativeStackNavigator();

export default () => {
  const [initializing, setInitializing] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {initializing ? (
        <MainNavigation.Navigator screenOptions={{ headerShown: false }}>
          <MainNavigation.Screen name='Preload' component={Preload} />
        </MainNavigation.Navigator>
      ) : (
        <MainNavigation.Navigator screenOptions={{ headerShown: false }}>
          {isLoggedIn ? (
            <MainNavigation.Screen
              name='PrivateRoutes'
              component={PrivateRoutes}
            />
          ) : (
            <MainNavigation.Screen
              name='PublicRoutes'
              component={PublicRoutes}
            />
          )}
        </MainNavigation.Navigator>
      )}
    </NavigationContainer>
  );
};
