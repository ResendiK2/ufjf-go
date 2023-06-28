import React, { useContext, useState } from "react";
import {
  VStack,
  Text,
  Input,
  Button,
  HStack,
  FormControl,
  Select,
} from "native-base";

import Ionicons from "react-native-vector-icons/FontAwesome5";
import { Context } from "../../../Providers/context";

export default ({ navigation }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("UFJF");
  const [people, setPeople] = useState("0");

  return (
    <VStack
      flex='1'
      space='5'
      paddingX='10'
      paddingY='10'
      bgColor='white'
      justifyContent='center'
    >
      <HStack justifyContent='space-evenly' alignItems='center'>
        <Ionicons name='car' size={50} color='#8b5cf6' />
        <Text fontSize='5xl' fontWeight='bold' color='primary.500'>
          UFJFGo
        </Text>
      </HStack>

      <FormControl>
        <VStack space='5'>
          <Input
            type='text'
            placeholder='De (Local de saída)'
            onChangeText={(text) => setEmail(text)}
          />

          <Input
            type='text'
            placeholder='Para (Local de chegada)'
            onChangeText={(text) => setPassword(text)}
          />

          <Select
            selectedValue={people}
            placeholder='Número de pessoas'
            onValueChange={(value) => setPeople(value)}
          >
            <Select.Item label='Numero de pessoas' value='0' disabled />
            <Select.Item label='1' value='1' />
            <Select.Item label='2' value='2' />
            <Select.Item label='3' value='3' />
            <Select.Item label='4' value='4' />
          </Select>
        </VStack>
      </FormControl>

      <Button w='100%'>Buscar</Button>
    </VStack>
  );
};
