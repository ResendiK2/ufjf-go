import { NativeBaseProvider } from "native-base";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/Routes";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' />
      <Routes />
    </NativeBaseProvider>
  );
}
