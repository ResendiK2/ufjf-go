import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import RideStack from "./Stacks/RideStack";
import Search from "../screens/private/Search";
import ChatStack from "./Stacks/ChatStack";
import Profile from "../screens/private/Profile";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          headerShown: false,
          tabBarLabel: "Buscar",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Rides'
        component={RideStack}
        options={{
          headerShown: false,
          tabBarLabel: "Caronas",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='car' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Chats'
        component={ChatStack}
        options={{
          headerShown: false,
          tabBarLabel: "Chats",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='chat' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
