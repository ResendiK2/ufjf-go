import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import RideStack from "./Stacks/RideStack";
import Search from "../screens/private/Search";
import ChatStack from "./Stacks/ChatStack";
import Profile from "../screens/private/Profile";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      tabBarStyle={{
        backgroundColor: "#8b5cf6",
        borderTopColor: "transparent",
      }}
      screenOptions={{
        tabBarActiveTintColor: "#7c3aed",
        tabBarActiveBackgroundColor: "#c4b5fd",
        tabBarInactiveTintColor: "#8b5cf6",
        tabBarInactiveBackgroundColor: "#f5f3ff",
      }}
    >
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          headerShown: false,
          tabBarLabel: "Início",
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='RidesStack'
        component={RideStack}
        options={{
          headerShown: false,
          tabBarLabel: "Caronas",
          tabBarIcon: ({ color, size }) => (
            <Icon name='car' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='ChatsStack'
        component={ChatStack}
        options={{
          headerShown: false,
          tabBarLabel: "Chats",
          tabBarIcon: ({ color, size }) => (
            <Icon name='comments' color={color} size={size} />
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
            <Icon name='user' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
