import React, { useState } from "react";
import { VStack, Text, Input, Button, HStack, Link, Heading, FormControl, Center, Box, Image, Select, CheckIcon, Stack, Checkbox, Alert, ChevronLeftIcon, ScrollView } from 'native-base';

import UploadSvg from "../../../../assets/upload.svg"

export default () => {
  const [error, setError] = useState(false)
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDriver, setIsDriver] = useState(false);
  const [userData, setUserData] = useState({})


  const verifyPassword = () => {
    if (password != confirmPassword) {
      setError(true)
    } else {
      setUserData({ ...userData, confirmPassword })
      setError(false)
    }
  }

  return (
    <ScrollView h="80">
      <VStack flex={1} justifyContent='center' alignItems='center'>
        <Center w="100%">
          <Box safeArea p="2" py="8" w="90%" maxW="290"><HStack space={6} mt={6}>
            <Button variant="unstyled">
              <ChevronLeftIcon />
            </Button>
            <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
              color: "warmGray.50"
            }}>
              Registro
            </Heading>
          </HStack>

            <VStack space={3} mt="5">
              <FormControl>
                <Input mt={6} placeholder="Nome" type="text" onChangeText={(value) => setUserData({ ...userData, name: value })} />
                <Input mt={6} placeholder="Sobrenome" type="text" onChangeText={(value) => setUserData({ ...userData, lastName: value })} />
                <Input mt={6} placeholder="Email" type="text" onChangeText={(value) => setUserData({ ...userData, email: value })} />
                <Input mt={6} placeholder="Idade" type="text" onChangeText={(value) => setUserData({ ...userData, age: value })} />
                <Input mt={6} placeholder="Senha" type="password" onChangeText={(value) => setPassword(value)} />
                <Input mt={6} placeholder="Confirme sua senha"
                  type="password"
                  onChangeText={(value) => setConfirmPassword(value)}
                  onBlur={() => verifyPassword()}
                />
                {error ?
                  <>
                    <FormControl.HelperText _text={{
                      fontSize: 'xs'
                    }}>
                      Senhas são diferentes
                    </FormControl.HelperText>
                  </> : null
                }
                <Select selectedValue={userData.gender} accessibilityLabel="Choose gender" placeholder="Como você se identifica" _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon />
                }} mt={6} onValueChange={(value) => setUserData({ ...userData, gender: value })} >
                  <Select.Item label="Masculino" value="masculino" />
                  <Select.Item label="Feminino" value="feminino" />
                  <Select.Item label="Outro" value="outro" />
                </Select>
                <HStack space={6} mt={6}>
                  <Text>Você é motorista?</Text>
                  <Checkbox onChange={() => setIsDriver(!isDriver)} accessibilityLabel="This is a dummy checkbox" />
                </HStack>
                {isDriver ? <>
                  <FormControl.Label mt={6}>Carteira de Motorista</FormControl.Label>
                  <Center mt={6}>
                    <UploadSvg height={50} width={50} />
                  </Center>
                </> :
                  <></>
                }
                <FormControl.Label mt={6}>Comprovante de Matricula</FormControl.Label>
                <Center mt={6}>
                  <UploadSvg height={50} width={50} />
                </Center>
              </FormControl>
              <Button mt="2" colorScheme="indigo" onPress={() => verifyPassword()} >
                Cria conta
              </Button>
            </VStack>
          </Box >
        </Center >
      </VStack >
    </ScrollView>
  );
};
