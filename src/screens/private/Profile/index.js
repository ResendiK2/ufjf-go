import React, { useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import {
  VStack,
  Text,
  Button,
  Center,
  ScrollView,
  Avatar,
  Divider,
  Icon,
  Spinner,
} from "native-base";

// import Icons from "react-native-vector-icons/FontAwesome5";
import { useIsFocused } from "@react-navigation/native";
import { Context } from "../../../Providers/context";

export default ({ navigation }) => {
  const isFocused = useIsFocused();

  const itsMine = false;
  const { isDriver, user, setUser } = useContext(Context);

  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    // mock
    const data = {
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

    setLoading(true);

    try {
      // const response = await axios.get(
      //   "https://ufjfgo.herokuapp.com/user",
      //   { id: user.id }
      // );

      setUser(data);
    } catch (err) {
      console.log(err);
      Alert.alert("Erro!", "Não foi possível carregar o perfil.");
      navigation.navigate("SearchStack", { screen: "Search" });
    }

    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, [isFocused]);

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
              {user?.name}
            </Text>
          </Center>

          {loading ? (
            <Center>
              <Spinner color='primary.500' size='lg' />
            </Center>
          ) : null}

          {/* {!itsMine && (
            <Button
              size='lg'
              variant='outline'
              leftIcon={<Icon as={Icons} name='paper-plane' size='lg' />}
              onPress={() =>
                navigation.navigate("ChatsStack", { screen: "Chat" })
              }
              isDisabled={loading}
            >
              Enviar Mensagem
            </Button>
          )} */}

          <VStack space='2'>
            <VStack>
              <Text fontSize='lg' fontWeight='bold' color='primary.900'>
                Idade
              </Text>
              <Text fontSize='md' color='primary.800'>
                {user?.age}
              </Text>
            </VStack>

            <VStack>
              <Text fontSize='lg' fontWeight='bold' color='primary.900'>
                Email
              </Text>
              <Text fontSize='md' color='primary.800'>
                {user?.email}
              </Text>
            </VStack>

            <VStack>
              <Text fontSize='lg' fontWeight='bold' color='primary.900'>
                Telefone
              </Text>
              <Text fontSize='md' color='primary.800'>
                {user?.telephone}
              </Text>
            </VStack>

            <VStack>
              <Text fontSize='lg' fontWeight='bold' color='primary.900'>
                Matrícula
              </Text>
              <Text fontSize='md' color='primary.800'>
                {user?.matricula}
              </Text>
            </VStack>

            {isDriver && itsMine && (
              <VStack>
                <Text fontSize='lg' fontWeight='bold' color='primary.900'>
                  CNH
                </Text>
                <Text fontSize='md' color='primary.800'>
                  {user?.cnh}
                </Text>
              </VStack>
            )}

            <Divider my='5' />

            <Text fontSize='2xl' fontWeight='bold' color='primary.900' mb='2'>
              Avaliações
            </Text>
            {(user?.avaliacoes || []).map((avaliacao) => (
              <VStack
                key={avaliacao.id}
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
