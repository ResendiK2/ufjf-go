import React, { useState } from "react";
import {
  VStack,
  Text,
  Input,
  Button,
  HStack,
  Select,
  Switch,
  ScrollView,
  FormControl,
} from "native-base";

import Ionicons from "react-native-vector-icons/FontAwesome5";

export default () => {
  const [datetime, setDatetime] = useState("");
  const [vagas, setVagas] = useState("0");
  const [from_adress, setFrom_adress] = useState("");
  const [to_adress, setTo_adress] = useState("");
  const [justWomen, setJustWomen] = useState(false);

  const handleRide = () => {
    console.log(datetime, vagas, from_adress, to_adress, justWomen);
  };

  return (
    <ScrollView bgColor='white'>
      <VStack flex='1' space='5' paddingX='10' paddingY='10'>
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
              placeholder='Horário (Ex: 12:00)'
              value={datetime}
              onChangeText={(text) => setDatetime(text)}
            />

            <Input
              type='text'
              placeholder='De (Local de saída)'
              value={from_adress}
              onChangeText={(text) => setFrom_adress(text)}
            />

            <Input
              type='text'
              placeholder='Para (Local de chegada)'
              value={to_adress}
              onChangeText={(text) => setTo_adress(text)}
            />

            <Select
              placeholder='Número de pessoas'
              selectedValue={vagas}
              onValueChange={(value) => setVagas(value)}
            >
              <Select.Item label='Numero de pessoas' value='0' disabled />
              <Select.Item label='1' value='1' />
              <Select.Item label='2' value='2' />
              <Select.Item label='3' value='3' />
              <Select.Item label='4' value='4' />
            </Select>

            <HStack alignItems='center'>
              <Switch
                mr={5}
                size='lg'
                isChecked={justWomen}
                onToggle={() => setJustWomen(!justWomen)}
              />
              <Text color='primary.500' fontSize='md' fontWeight='semibold'>
                Apenas mulheres
              </Text>
            </HStack>
          </VStack>
        </FormControl>

        <Button w='100%' onPress={handleRide}>
          Cadastrar carona
        </Button>
      </VStack>
    </ScrollView>
  );
};
