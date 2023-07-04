import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Rides from "../../../screens/private/Rides/Rides";
import Ride from "../../../screens/private/Rides/Ride";
import RidesForm from "../../../screens/private/Rides/RidesForm";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName='Rides'>
      <Stack.Screen
        name='Rides'
        component={Rides}
        options={{
          headerTitle: "Caronas",
        }}
      />
      <Stack.Screen
        name='Ride'
        component={Ride}
        options={{
          headerTitle: "Carona",
        }}
      />
      <Stack.Screen
        name='RidesForm'
        component={RidesForm}
        options={{
          headerTitle: "Formulário de Carona",
        }}
      />
    </Stack.Navigator>
  );
};
