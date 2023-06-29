import React from "react";
import { VStack, Text, HStack, Avatar } from "native-base";

import Icons from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default ({
  id,
  from_adress,
  to_adress,
  datetime,
  driverName,
  edit,
  isSearch,
}) => {
  const navigation = useNavigation();

  const item = {
    id: 41,
    fullName: "Aniket Kumar",
    timeStamp: "8:56 PM",
    recentText: "All the best",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Ride", { isSearch })}
      disabled={!isSearch}
    >
      <VStack
        borderWidth='2'
        borderStyle='dashed'
        borderColor='primary.500'
        py='5'
        px='3'
        space='2'
        my='2'
      >
        <HStack justifyContent='space-between' alignItems='center'>
          <HStack flex='5' alignItems='center'>
            <Text
              fontSize='md'
              fontWeight='semibold'
              color='primary.500'
              mb='2'
              numberOfLines={3}
            >
              {datetime}
            </Text>
          </HStack>
          {edit ? (
            <HStack flex='1' justifyContent='flex-end'>
              <Icons name='edit' size={20} color='#8b5cf6' />
            </HStack>
          ) : null}
        </HStack>

        <HStack justifyContent='space-between' alignItems='center'>
          <HStack flex='1' alignItems='center'>
            <Icons name='flag' size={25} color='#8b5cf6' />
            <Text
              ml='5'
              fontSize='lg'
              fontWeight='semibold'
              color='primary.500'
              numberOfLines={2}
            >
              {from_adress}
            </Text>
          </HStack>
        </HStack>

        <HStack justifyContent='space-between' alignItems='center' pl='1'>
          <HStack flex='1' alignItems='center'>
            <Icons name='map-pin' size={25} color='#8b5cf6' />
            <Text
              ml='7'
              fontSize='lg'
              fontWeight='semibold'
              color='primary.500'
              numberOfLines={2}
            >
              {to_adress}
            </Text>
          </HStack>
        </HStack>

        <HStack mt='2'>
          <Avatar size='40px' source={{ uri: item.avatarUrl }} />
          <VStack ml='3' flex='1' justifyContent='center'>
            <Text color='primary.500' bold>
              {driverName}
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </TouchableOpacity>
  );
};
