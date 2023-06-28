import React, { useContext, useState } from "react";
import { VStack, Text, Input, Button, HStack, FormControl } from "native-base";

import Ionicons from "react-native-vector-icons/FontAwesome5";
import { Context } from "../../../Providers/context";

export default ({ navigation }) => {
  const { setIsLogged } = useContext(Context);

  const [userData, setUserData] = useState({});

  const handleLogin = () => {

    console.log(userData);

    setIsLogged(true);
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

      <FormControl>
        <VStack space='5'>
          <Input
            type='email'
            placeholder='Email'
            onChangeText={(text) => setUserData({ ...data, email: text })}
          />

          <Input
            type='password'
            placeholder='Senha'
            onChangeText={(text) => setUserData({ ...data, password: text })}
          />
        </VStack>
      </FormControl>

      <VStack space='3'>
        <Button w='100%' onPress={() => handleLogin()}>
          Entrar
        </Button>
        <Button
          w='100%'
          variant='outline'
          onPress={() => {
            navigation.navigate("SignUp")
            handleLogin()
          }}

        >
          Cadastrar
        </Button>
        <Button
          w='100%'
          variant='link'
          onPress={() => navigation.navigate("ForgetPassword")}
        >
          Esqueci minha senha
        </Button>
      </VStack>
    </VStack>
  );
};
