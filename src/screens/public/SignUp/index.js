import React, { useContext, useState } from "react";
import axios from "axios";
import { Alert } from "react-native";
import {
  VStack,
  Text,
  Input,
  Button,
  HStack,
  FormControl,
  Center,
  Select,
  ScrollView,
  Switch,
  Spinner,
} from "native-base";

import { Context } from "../../../Providers/context";

export default () => {
  const {
    setIsLogged,
    // setUser,
    setIsDriver: setUserIsDriver,
  } = useContext(Context);

  const [loading, setLoading] = useState();

  const [userData, setUserData] = useState({
    name: 'teste',
    email: 'email@email.com',
    password: "senha123",
    confirmPassword: 'senha123',
    matricula: "123456789",
    phone: '213456789',
    curso: 'Sistemas de Informação',
    photo: 'foto',
    cnh: 'abcd1234'
  });
  const [isDriver, setIsDriver] = useState(false);
  const [error, setError] = useState(false);

  const verifyPassword = () => {
    if (userData?.password != userData?.confirmPassword) {
      setError(true);
      return;
    }
    setError(false);
    return true;
  };

  const handleSignUp = async () => {
    if (!verifyPassword()) return;

    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8001/users/create",
        { ...userData, user_type_id: !isDriver ? 1 : 2 }
      );
      console.log(response);

      Alert.alert("Sucesso!", "Usuário cadastrado com sucesso!");

      setUserIsDriver(isDriver);
      // setUser(userData, id);
      setIsLogged(true);
    } catch (err) {
      console.log(err);
      Alert.alert("Erro!", "Não foi possível realizar o cadastro.");
    }

    setLoading(false);
  };

  return (
    <ScrollView bgColor='white'>
      <VStack space='5' paddingX='10' paddingY='10'>
        <FormControl>
          <VStack space='5'>
            <Input
              placeholder='Nome'
              value={userData?.name}
              type='text'
              onChangeText={(value) =>
                setUserData({ ...userData, name: value })
              }
              isDisabled={loading}
            />

            <Input
              placeholder='Email'
              value={userData?.email}
              type='text'
              onChangeText={(value) =>
                setUserData({ ...userData, email: value })
              }
              isDisabled={loading}
            />

            <Input
              placeholder='Numero de matricula'
              value={userData?.matricula}
              type='text'
              onChangeText={(value) =>
                setUserData({ ...userData, matricula: value })
              }
              isDisabled={loading}
            />

            <Input
              placeholder='Numero de telefone'
              value={userData?.phone}
              type='text'
              onChangeText={(value) =>
                setUserData({ ...userData, phone: value })
              }
              isDisabled={loading}
            />

            {/* <Input
              placeholder='Idade'
              value={userData?.age}
              type='text'
              onChangeText={(value) => setUserData({ ...userData, age: value })}
              isDisabled={loading}
            /> */}

            <Input
              placeholder='Senha'
              value={userData?.password}
              type='password'
              onChangeText={(value) => setUserData({ ...userData, passoword: value })}
              isDisabled={loading}
            />

            <Center justifyContent='center' alignItems='center'>
              <Input
                type='password'
                value={userData?.confirmPassword}
                placeholder='Confirme sua senha'
                onChangeText={(value) => setUserData({ ...userData, confirmPassword: value })}
                onBlur={() => verifyPassword()}
                isDisabled={loading}
              />
              {error ? (
                <Text color='red.500' fontSize='xs'>
                  As senhas não coincidem!
                </Text>
              ) : null}
            </Center>

            {/* <Select
              selectedValue={userData.gender}

              accessibilityLabel='Choose gender'
              placeholder='Como você se identifica'
              onValueChange={(value) =>
                setUserData({ ...userData, gender: value })
              }
              isDisabled={loading}
            >
              <Select.Item label='Masculino' value='masculino' />
              <Select.Item label='Feminino' value='feminino' />
              <Select.Item label='Outro' value='outro' />
            </Select> */}

            <HStack alignItems='center'>
              <Switch
                mr={5}
                size='lg'
                isChecked={isDriver}
                onToggle={() => setIsDriver(!isDriver)}
                isDisabled={loading}
              />
              <Text color='primary.500' fontSize='md'>
                Também sou motorista
              </Text>
            </HStack>

            {isDriver ? (
              <Input
                placeholder='CNH'
                value={userData?.cnh}
                type='text'
                onChangeText={(value) =>
                  setUserData({ ...userData, cnh: value })
                }
                isDisabled={loading}
              />
            ) : null}
          </VStack>
        </FormControl>

        {loading ? (
          <Center>
            <Spinner color='primary.500' size='lg' />
          </Center>
        ) : null}

        <Center mt='5'>
          <Button w='100%' onPress={() => handleSignUp()} disabled={loading}>
            Cria conta
          </Button>
        </Center>
      </VStack>
    </ScrollView>
  );
};
