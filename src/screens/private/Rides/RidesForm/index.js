import React, { useState } from "react";
import { Alert } from "react-native";
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
  Center,
  Spinner,
} from "native-base";

import Ionicons from "react-native-vector-icons/FontAwesome5";

export default () => {
  const [loading, setLoading] = useState(false);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [vagas, setVagas] = useState("0");
  const [from_adress, setFrom_adress] = useState("");
  const [to_adress, setTo_adress] = useState("");
  const [justWomen, setJustWomen] = useState(false);

  const handleRide = () => {
    setLoading(true);

    try {
      // const response = await axios.post(
      //   "https://ufjfgo.herokuapp.com/register",
      //   userData
      // );

      Alert.alert("Sucesso!", "Carona cadastrada com sucesso!");

      navigation.goBack();
    } catch (err) {
      Alert.alert("Erro!", "Não foi possível cadastrar a carona.");
    }

    setLoading(false);
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
              value={date}
              onChangeText={(text) => setDatetime(text)}
              isDisabled={loading}
            />

            <Input
              type='text'
              placeholder='Horário (Ex: 12:00)'
              value={time}
              onChangeText={(text) => setDatetime(text)}
              isDisabled={loading}
            />

            <Input
              type='text'
              placeholder='De (Local de saída)'
              value={from_adress}
              onChangeText={(text) => setFrom_adress(text)}
              isDisabled={loading}
            />

            <Input
              type='text'
              placeholder='Para (Local de chegada)'
              value={to_adress}
              onChangeText={(text) => setTo_adress(text)}
              isDisabled={loading}
            />

            <Select
              placeholder='Número de pessoas'
              selectedValue={vagas}
              onValueChange={(value) => setVagas(value)}
              isDisabled={loading}
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
                isDisabled={loading}
              />
              <Text color='primary.500' fontSize='md' fontWeight='semibold'>
                Apenas mulheres
              </Text>
            </HStack>
          </VStack>
        </FormControl>

        {loading ? (
          <Center>
            <Spinner color='primary.500' size='lg' />
          </Center>
        ) : null}

        <Button w='100%' onPress={handleRide} isDisabled={loading}>
          Cadastrar carona
        </Button>
      </VStack>
    </ScrollView>
  );
};
