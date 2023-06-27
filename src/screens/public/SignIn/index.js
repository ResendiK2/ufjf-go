import React, { useState } from "react";
import { VStack, Text, Input, Button, HStack, Link, Heading, FormControl, Center, Box, Image } from 'native-base';

import LogoImg from '../../../../assets/App.jpeg'


export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <VStack flex={1} justifyContent='center' alignItems='center'>
      <Center w="100%">
        <Image shadow={2}
          source={LogoImg}
          alt="Alternate Text"
          resizeMode="contain" />
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
            color: "warmGray.50"
          }}>
            Bem vindo
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Login</FormControl.Label>
              <Input onChangeText={(text) => setEmail(text)} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Senha</FormControl.Label>
              <Input type="password" onChangeText={(text) => setPassword(text)} />
              <Link _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500"
              }} alignSelf="flex-end" mt="1">
                Esqueci minha senha
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={handleLogin}>
              Entrar
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600" _dark={{
                color: "warmGray.200"
              }}>
                Novo por aqui?{" "}
              </Text>
              <Link _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm"
              }} href="#">
                Registrar
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </VStack>
  );
};
