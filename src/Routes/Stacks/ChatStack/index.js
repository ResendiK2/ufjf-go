import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Chats from "../../../screens/private/Chats/Chats";
import Chat from "../../../screens/private/Chats/Chat";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName='Chats'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Chats' component={Chats} />
      <Stack.Screen name='Chat' component={Chat} />
    </Stack.Navigator>
  );
};
