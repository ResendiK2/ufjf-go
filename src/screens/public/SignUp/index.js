import React, { useContext, useState } from "react";
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

  const [userData, setUserData] = useState({});
  const [isDriver, setIsDriver] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  const verifyPassword = () => {
    if (password != confirmPassword) {
      setError(true);
      return;
    }

    setUserData({ ...userData, confirmPassword });
    setError(false);
    return true;
  };

  const handleSignUp = async () => {
    if (!verifyPassword()) return;

    setLoading(true);

    try {
      // const response = await axios.post(
      //   "https://ufjfgo.herokuapp.com/register",
      //   userData
      // );

      Alert.alert("Sucesso!", "Usuário cadastrado com sucesso!");

      setUserIsDriver(isDriver);
      // setUser(userData, id);
      setIsLogged(true);
    } catch (err) {
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
              type='text'
              onChangeText={(value) =>
                setUserData({ ...userData, name: value })
              }
              isDisabled={loading}
            />

            <Input
              placeholder='Email'
              type='text'
              onChangeText={(value) =>
                setUserData({ ...userData, email: value })
              }
              isDisabled={loading}
            />

            <Input
              placeholder='Numero de matricula'
              type='text'
              onChangeText={(value) =>
                setUserData({ ...userData, matricula: value })
              }
              isDisabled={loading}
            />

            <Input
              placeholder='Numero de telefone'
              type='text'
              onChangeText={(value) =>
                setUserData({ ...userData, phone: value })
              }
              isDisabled={loading}
            />

            <Input
              placeholder='Idade'
              type='text'
              onChangeText={(value) => setUserData({ ...userData, age: value })}
              isDisabled={loading}
            />

            <Input
              placeholder='Senha'
              type='password'
              onChangeText={(value) => setPassword(value)}
              isDisabled={loading}
            />

            <Center justifyContent='center' alignItems='center'>
              <Input
                type='password'
                placeholder='Confirme sua senha'
                onChangeText={(value) => setConfirmPassword(value)}
                onBlur={() => verifyPassword()}
                isDisabled={loading}
              />
              {error ? (
                <Text color='red.500' fontSize='xs'>
                  As senhas não coincidem!
                </Text>
              ) : null}
            </Center>

            <Select
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
            </Select>

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
