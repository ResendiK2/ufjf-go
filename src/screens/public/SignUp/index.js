import React, { useState } from "react";
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
  Icon,
} from "native-base";

import Ionicons from "react-native-vector-icons/Ionicons";

export default () => {
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDriver, setIsDriver] = useState(false);
  const [userData, setUserData] = useState({});

  const verifyPassword = () => {
    if (password != confirmPassword) {
      setError(true);
    } else {
      setUserData({ ...userData, password: password });
      setError(false);
    }
  };

  const handleSignUp = () => console.log(userData);

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
            />

            <Input
              placeholder='Email'
              type='text'
              onChangeText={(value) =>
                setUserData({ ...userData, email: value })
              }
            />

            <Input
              placeholder='Matricula'
              type='text'
              onChangeText={(value) =>
                setUserData({ ...userData, matricula: value })
              }
            />

            <Input
              placeholder='Telefone'
              type='text'
              onChangeText={(value) => setUserData({ ...userData, phone: value })}
            />

            <Input
              placeholder='Curso'
              type='text'
              onChangeText={(value) => setUserData({ ...userData, curso: value })}
            />

            <Input
              placeholder='Senha'
              type='password'
              onChangeText={(value) => setPassword(value)}
            />

            <Center justifyContent='center' alignItems='center'>
              <Input
                type='password'
                placeholder='Confirme sua senha'
                onChangeText={(value) => setConfirmPassword(value)}
                onBlur={() => verifyPassword()}
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
                onToggle={() => {
                  setIsDriver(!isDriver)
                  isDriver ? setUserData({ ...userData, user_type_id: 1 }) : setUserData({ ...userData, user_type_id: 0 })
                }}
              />
              <Text color='primary.500' fontSize='md'>
                Também sou motorista
              </Text>
            </HStack>

            {isDriver ? (
              <Button
                size='lg'
                leftIcon={
                  <Icon
                    as={Ionicons}
                    name='cloud-upload-outline'
                    size='5xl'
                    mr='3'
                  />
                }
                variant='ghost'
              >
                Carteira de Motorista
              </Button>
            ) : null}

            <Button
              size='lg'
              leftIcon={
                <Icon
                  as={Ionicons}
                  name='cloud-upload-outline'
                  size='5xl'
                  mr='3'
                />
              }
              variant='ghost'
            >
              Comprovante de Matrícula
            </Button>
          </VStack>
        </FormControl>

        <Center mt='5'>
          <Button w='100%' onPress={() => verifyPassword
            (!error) ? handleSignUp : console.log("Erro")
          }>
            Cria conta
          </Button>
        </Center>
      </VStack>
    </ScrollView >
  );
};
