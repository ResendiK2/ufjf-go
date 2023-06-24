import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Rides from "../../../screens/private/Rides/Rides";
import Ride from "../../../screens/private/Rides/Ride";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName='Rides'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Rides' component={Rides} />
      <Stack.Screen name='Ride' component={Ride} />
    </Stack.Navigator>
  );
};
