import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Search from "../../../Screens/private/Search";

import Rides from "../../../Screens/private/Rides/Rides";
import Ride from "../../../Screens/private/Rides/Ride";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName='Search'>
      <Stack.Screen
        name='Search'
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Rides'
        component={Rides}
        options={{
          headerTitle: "Caronas Disponíveis",
        }}
      />
      <Stack.Screen
        name='Ride'
        component={Ride}
        options={{
          headerTitle: "Carona",
        }}
      />
    </Stack.Navigator>
  );
};
