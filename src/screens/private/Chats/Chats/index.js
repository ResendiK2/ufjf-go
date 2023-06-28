import React from "react";
import {
  VStack,
  Text,
  Box,
  Heading,
  FlatList,
  HStack,
  Avatar,
  Spacer,
} from "native-base";
const jsonData = {
  "messages": [
    {
      "id": 1,
      "sender_id": 1,
      "receiver_id": 2,
      "content": "Olá! Como você está?"
    },
    {
      "id": 2,
      "sender_id": 2,
      "receiver_id": 1,
      "content": "Oi! Estou bem, obrigado por perguntar."
    },
    {
      "id": 3,
      "sender_id": 1,
      "receiver_id": 3,
      "content": "E aí? Vamos sair hoje à noite?"
    },
    {
      "id": 4,
      "sender_id": 3,
      "receiver_id": 1,
      "content": "Claro! Onde nos encontramos?"
    }
  ]
};
export default () => {
  const data = [
    {
      id: 1,
      fullName: "Aafreen Khan",
      timeStamp: "12:47 PM",
      recentText: "Good Day!",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      fullName: "Sujitha Mathur",
      timeStamp: "11:11 PM",
      recentText: "Cheer up, there!",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    },
    {
      id: 3,
      fullName: "Anci Barroco",
      timeStamp: "6:22 PM",
      recentText: "Good Day!",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    },
    {
      id: 4,
      fullName: "Aniket Kumar",
      timeStamp: "8:56 PM",
      recentText: "All the best",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    },
    {
      id: 10,
      fullName: "Aafreen Khan",
      timeStamp: "12:47 PM",
      recentText: "Good Day!",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 20,
      fullName: "Sujitha Mathur",
      timeStamp: "11:11 PM",
      recentText: "Cheer up, there!",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    },
    {
      id: 30,
      fullName: "Anci Barroco",
      timeStamp: "6:22 PM",
      recentText: "Good Day!",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    },
    {
      id: 40,
      fullName: "Aniket Kumar",
      timeStamp: "8:56 PM",
      recentText: "All the best",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    },
    {
      id: 11,
      fullName: "Aafreen Khan",
      timeStamp: "12:47 PM",
      recentText: "Good Day!",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 21,
      fullName: "Sujitha Mathur",
      timeStamp: "11:11 PM",
      recentText: "Cheer up, there!",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    },
    {
      id: 31,
      fullName: "Anci Barroco",
      timeStamp: "6:22 PM",
      recentText: "Good Day!",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    },
    {
      id: 41,
      fullName: "Aniket Kumar",
      timeStamp: "8:56 PM",
      recentText: "All the best",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    },
  ];

  function getConversations(messages, myId) {
    const conversations = [{}];

    messages.forEach((message) => {
      const { sender_id, receiver_id } = message;
      const otherUserId = sender_id === myId ? receiver_id : sender_id;

      if (!conversations[otherUserId]) {
        conversations[otherUserId] = [];
      }

      conversations[otherUserId].push(message);
    });

    return conversations;
  }

  function sendMessage(senderId, receiverId, content) {
    let message = {
      senderId: senderId,
      receiverId: receiverId,
      content: content
    };

    console.log(`de ${message.senderId}`);
    console.log(`para ${message.receiverId}`);
    console.log(`${message.content}`);
  }

  function receiveMessage(receiverId, senderId, content) {
    let message = {
      senderId: senderId,
      receiverId: receiverId,
      content: content
    };

    console.log(`de ${message.senderId}`);
    console.log(`para ${message.receiverId}`);
    console.log(`${message.content}`);
  }

  const getMessages = () => axios.get("/messages");

  return (
    <VStack flex='1' bgColor='white' justifyContent='center'>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Box borderBottomWidth='1' borderColor='primary.100' px='3' py='3'>
            <HStack space={[2, 3]} justifyContent='space-between'>
              <Avatar size='48px' source={{ uri: item.avatarUrl }} />
              <VStack>
                <Text color='primary.900' bold>
                  {item.fullName}
                </Text>
                <Text color='coolGray.600'>{item.recentText}</Text>
              </VStack>
              <Spacer />
              <Text fontSize='xs' color='coolGray.800' alignSelf='flex-start'>
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </VStack>
  );
};

export { getConversations }
