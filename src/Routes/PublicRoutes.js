import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../screens/public/SignIn";
import SignUp from "../screens/public/SignUp";
import ForgetPassword from "../screens/public/ForgetPassword";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName='SignIn'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='SignIn' component={SignIn} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
    </Stack.Navigator>
  );
};
