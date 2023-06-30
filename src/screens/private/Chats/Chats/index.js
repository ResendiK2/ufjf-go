import React, { useEffect, useState } from "react";
import {
  VStack,
  Text,
  Box,
  FlatList,
  HStack,
  Avatar,
  Spacer,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { useIsFocused } from "@react-navigation/native";

export default ({ navigation }) => {
  const isFocused = useIsFocused();

  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState([]);

  const getChats = async () => {
    // mock
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

    setLoading(true);

    try {
      // const response = await axios.post(
      //   "https://ufjfgo.herokuapp.com/rides/history",
      //   { id: user.id }
      // );

      setChats(data);
    } catch (err) {
      Alert.alert("Erro!", "Não foi possível carregar as caronas.");
      navigation.navigate("SearchStack", { screen: "Search" });
    }

    setLoading(false);
  };

  const getChatsEvery = () => {
    if (!isFocused) return;

    getChats();

    setTimeout(() => {
      getChatsEvery();
    }, 60_000);
  };

  useEffect(() => {
    getChatsEvery();
  }, [isFocused]);

  keyExtractor = (item) => item.id.toString();

  const renderItem = ({ item }) => (
    <Box borderBottomWidth='1' borderColor='primary.100' px='3' py='3'>
      <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
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
      </TouchableOpacity>
    </Box>
  );

  return (
    <VStack flex='1' bgColor='white' justifyContent='center'>
      <FlatList
        data={chats}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onRefresh={() => getChats()}
        refreshing={loading}
      />
    </VStack>
  );
};
