import React from "react";
import {
  VStack,
  Text,
  Box,
  FlatList,
  HStack,
  Avatar,
  Spacer,
  Input,
  Button,
  Icon,
} from "native-base";

import Icons from "react-native-vector-icons/FontAwesome5";

export default ({ navigation }) => {
  const item = {
    id: 1,
    fullName: "Aafreen Khan",
    timeStamp: "12:47 PM",
    recentText: "Good Day!",
    avatarUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  };

  let messages = [
    {
      id: 1,
      timeStamp: "12:47 PM",
      message: "Hello!",
      itsMine: false,
    },
    {
      id: 2,
      timeStamp: "12:47 PM",
      message: "Good Day!",
      itsMine: true,
    },
    {
      id: 3,
      timeStamp: "12:48 PM",
      message: "Good Day!",
      itsMine: false,
    },
    {
      id: 4,
      timeStamp: "12:49 PM",
      message: "I am Aafreen Khan",
      itsMine: false,
    },
    {
      id: 5,
      timeStamp: "12:50 PM",
      message: "I am Nishant",
      itsMine: true,
    },
    {
      id: 6,
      timeStamp: "12:51 PM",
      message: "How are you?",
      itsMine: true,
    },
    {
      id: 7,
      timeStamp: "12:52 PM",
      message: "I am fine",
      itsMine: false,
    },
    {
      id: 8,
      timeStamp: "12:53 PM",
      message: "And you?",
      itsMine: false,
    },
    {
      id: 9,
      timeStamp: "12:54 PM",
      message: "I am fine too",
      itsMine: true,
    },
    {
      id: 10,
      timeStamp: "12:54 PM",
      message: "How is your day going?",
      itsMine: true,
    },
    {
      id: 11,
      timeStamp: "12:55 PM",
      message: "It's going good",
      itsMine: false,
    },
    {
      id: 12,
      timeStamp: "12:47 PM",
      message: "What about you?",
      itsMine: false,
    },
    {
      id: 13,
      timeStamp: "12:47 PM",
      message: "It's going good",
      itsMine: true,
    },

    {
      id: 14,
      timeStamp: "12:47 PM",
      message: "What about you?",
      itsMine: true,
    },
    {
      id: 15,
      timeStamp: "12:47 PM",
      message: "It's going good",
      itsMine: false,
    },
    {
      id: 16,
      timeStamp: "12:47 PM",
      message:
        "According to plan, I am going to the market to buy some fruits, but I am not sure if I will be able to make it",
      itsMine: false,
    },
  ];

  messages = messages.reduce((acc, curr) => {
    acc.unshift(curr);
    return acc;
  }, []);

  // inverte the flatlist to show the latest message at the bottom

  return (
    <VStack flex='1' justifyContent='space-between'>
      <Box
        borderBottomWidth='1'
        borderColor='primary.100'
        px='3'
        py='3'
        bgColor='white'
      >
        <HStack mt='2'>
          <Avatar size='40px' source={{ uri: item.avatarUrl }} />
          <VStack ml='3' flex='1' justifyContent='center'>
            <Text fontSize='lg' color='primary.800' bold>
              {item.fullName}
            </Text>
          </VStack>
        </HStack>
      </Box>

      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <HStack
            justifyContent={item.itsMine ? "flex-end" : "flex-start"}
            my='2'
            mx='5'
          >
            <Box
              px='3'
              py='2'
              rounded='lg'
              bgColor={item.itsMine ? "primary.500" : "primary.100"}
            >
              <Text color={item.itsMine ? "white" : "primary.800"}>
                {item.message}
              </Text>
            </Box>
          </HStack>
        )}
        keyExtractor={(item) => item.id}
        inverted
      />

      <Box
        borderTopWidth='1'
        borderColor='primary.100'
        px='3'
        py='2'
        bgColor='white'
      >
        <HStack space='2'>
          <Input
            py='2'
            px='3'
            size='md'
            width='80%'
            variant='filled'
            borderRadius='full'
            bgColor='primary.100'
            placeholder='Escreva uma mensagem'
          />

          <Button
            px='3'
            py='2'
            size='md'
            minH='10'
            width='20%'
            bgColor='primary.500'
            borderRadius='full'
          >
            <Icon
              as={Icons}
              name='paper-plane'
              color='white'
              size='md'
              mr='2'
            />
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};
