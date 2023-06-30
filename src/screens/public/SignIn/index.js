import React, { useContext, useState } from "react";
import {
  VStack,
  Text,
  Input,
  Button,
  HStack,
  FormControl,
  Center,
  Spinner,
} from "native-base";

import Ionicons from "react-native-vector-icons/FontAwesome5";
import { Context } from "../../../Providers/context";
import { Alert } from "react-native";
import axios from "axios";

export default ({ navigation }) => {
  const { setIsLogged, setIsDriver } = useContext(Context);

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    setLoading(true);

    try {
      // const response = await axios.post("https://ufjfgo.herokuapp.com/login", {
      //   email,
      //   password,
      // });

      Alert.alert("Sucesso!", "Login realizado com sucesso!");

      setIsLogged(true);
      setIsDriver(true);
    } catch (err) {
      Alert.alert("Erro!", "Não foi possível realizar o login.");
    }

    setLoading(false);
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
            onChangeText={(text) => setEmail(text)}
            isDisabled={loading}
          />

          <Input
            type='password'
            placeholder='Senha'
            onChangeText={(text) => setPassword(text)}
            isDisabled={loading}
          />
        </VStack>
      </FormControl>

      {loading ? (
        <Center>
          <Spinner color='primary.500' size='lg' />
        </Center>
      ) : null}

      <VStack space='3'>
        <Button w='100%' onPress={() => handleLogin()} isDisabled={loading}>
          Entrar
        </Button>
        <Button
          w='100%'
          variant='outline'
          onPress={() => navigation.navigate("SignUp")}
          isDisabled={loading}
        >
          Cadastrar
        </Button>
        <Button
          w='100%'
          variant='link'
          onPress={() => navigation.navigate("ForgetPassword")}
          isDisabled={loading}
        >
          Esqueci minha senha
        </Button>
      </VStack>
    </VStack>
  );
};
