import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Chats from "../../../Screens/private/Chats/Chats";
import Chat from "../../../Screens/private/Chats/Chat";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName='Chats'>
      <Stack.Screen name='Chats' component={Chats} />
      <Stack.Screen name='Chat' component={Chat} />
    </Stack.Navigator>
  );
};
