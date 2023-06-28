import React, { useState } from "react";
import {
  VStack,
  Text,
  Input,
  Button,
  HStack,
  FormControl,
  Spinner,
} from "native-base";

import Ionicons from "react-native-vector-icons/FontAwesome5";

export default ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <VStack
      flex='1'
      space='5'
      paddingX='10'
      paddingY='10'
      bgColor='white'
      justifyContent='center'
    >
      <HStack justifyContent='space-evenly' alignItems='center'>
        <Ionicons name='car' size={50} color='#8b5cf6' />
        <Text fontSize='5xl' fontWeight='bold' color='primary.500'>
          UFJFGo
        </Text>
      </HStack>

      <Spinner size='lg' />
    </VStack>
  );
};
