import React from "react";
import {
  VStack,
  Text,
  Button,
  Center,
  ScrollView,
  Avatar,
  Divider,
  Icon,
} from "native-base";

import Icons from "react-native-vector-icons/FontAwesome5";

export default ({ navigation }) => {
  const itsMine = false;
  const isDriver = true;

  const person = {
    name: "Guilherme",
    age: 20,
    email: "gui@gamil.com",
    telephone: "999999999",
    matricula: "2019101111",
    cnh: "123456789",
    avaliacoes: [
      {
        id: 1,
        userName: "João",
        description: "Muito bom",
        stars: 5,
      },
      {
        id: 2,
        userName: "Maria",
        description: "Muito bom, o melhor motorista",
        stars: 5,
      },
      {
        id: 3,
        userName: "José",
        description: "Chegou atrasado, mas é bom",
        stars: 4,
      },
    ],
  };

  return (
    <ScrollView bgColor='white'>
      <VStack space='5' paddingX='10' paddingY='10'>
        <VStack space='5'>
          <Center>
            <Avatar
              bg='pink.600'
              alignSelf='center'
              size='xl'
              source={{
                uri: "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80",
              }}
            >
              GG
            </Avatar>
            <Text fontSize='2xl' fontWeight='bold' color='primary.500'>
              {person.name}
            </Text>
          </Center>

          {!itsMine && (
            <Button
              size='lg'
              variant='outline'
              leftIcon={<Icon as={Icons} name='paper-plane' size='lg' />}
              onPress={() =>
                navigation.navigate("ChatsStack", { screen: "Chat" })
              }
            >
              Enviar Mensagem
            </Button>
          )}

          <VStack space='2'>
            <VStack>
              <Text fontSize='lg' fontWeight='bold' color='primary.900'>
                Idade
              </Text>
              <Text fontSize='md' color='primary.800'>
                {person.age}
              </Text>
            </VStack>

            <VStack>
              <Text fontSize='lg' fontWeight='bold' color='primary.900'>
                Email
              </Text>
              <Text fontSize='md' color='primary.800'>
                {person.email}
              </Text>
            </VStack>

            <VStack>
              <Text fontSize='lg' fontWeight='bold' color='primary.900'>
                Telefone
              </Text>
              <Text fontSize='md' color='primary.800'>
                {person.telephone}
              </Text>
            </VStack>

            <VStack>
              <Text fontSize='lg' fontWeight='bold' color='primary.900'>
                Matrícula
              </Text>
              <Text fontSize='md' color='primary.800'>
                {person.matricula}
              </Text>
            </VStack>

            {isDriver && itsMine && (
              <VStack>
                <Text fontSize='lg' fontWeight='bold' color='primary.900'>
                  CNH
                </Text>
                <Text fontSize='md' color='primary.800'>
                  {person.cnh}
                </Text>
              </VStack>
            )}

            <Divider my='5' />

            <Text fontSize='2xl' fontWeight='bold' color='primary.900' mb='2'>
              Avaliações
            </Text>
            {(person.avaliacoes || []).map((avaliacao) => (
              <VStack
                my='1'
                borderStyle='dashed'
                borderColor='primary.500'
                borderWidth='2'
                px='3'
                py='2'
              >
                <Text
                  fontSize='lg'
                  fontWeight='bold'
                  color='primary.900'
                  mb='1'
                >
                  {avaliacao.userName}
                </Text>
                <Text fontSize='sm' color='primary.800'>
                  {avaliacao.description}
                </Text>
              </VStack>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
};
