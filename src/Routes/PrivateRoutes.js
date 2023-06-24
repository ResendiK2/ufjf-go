import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Rides from "../screens/private/Rides/Rides";
import RideStack from "./Stacks/RideStack";
import Search from "../screens/private/Search";
import ChatStack from "./Stacks/ChatStack";
import Profile from "../screens/private/Profile";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Search' component={Search} />
      <Tab.Screen name='Rides' component={RideStack} />
      <Tab.Screen name='Chats' component={ChatStack} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
};
