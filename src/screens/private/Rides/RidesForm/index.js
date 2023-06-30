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
import DateTimePicker from "@react-native-community/datetimepicker";

export default () => {
  const [loading, setLoading] = useState(false);

  const [dateModal, toggleDateModal] = useState(false);
  const [timeModal, toggleTimeModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [vagas, setVagas] = useState("0");
  const [from_address, setFrom_address] = useState("");
  const [to_address, setTo_address] = useState("");
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
            <VStack space='1'>
              <Text color='primary.900' fontSize='md' fontWeight='semibold'>
                Data:
              </Text>
              <Button
                w='100%'
                onPress={() => toggleDateModal(!dateModal)}
                variant='outline'
                isDisabled={loading}
              >
                {date.toLocaleDateString()}
              </Button>
            </VStack>

            <VStack space='1'>
              <Text color='primary.900' fontSize='md' fontWeight='semibold'>
                Horário:
              </Text>
              <Button
                w='100%'
                onPress={() => toggleTimeModal(!timeModal)}
                variant='outline'
                isDisabled={loading}
              >
                {time.toLocaleTimeString().slice(0, 5)}
              </Button>
            </VStack>

            <Input
              type='text'
              placeholder='De (Local de saída)'
              value={from_address}
              onChangeText={(text) => setFrom_address(text)}
              isDisabled={loading}
            />

            <Input
              type='text'
              placeholder='Para (Local de chegada)'
              value={to_address}
              onChangeText={(text) => setTo_address(text)}
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

      {dateModal && (
        <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode='date'
          is24Hour={true}
          display='default'
          onChange={(_, selectedDate) => {
            toggleDateModal(!dateModal);
            const currentDate = selectedDate || date;
            setDate(currentDate);
          }}
        />
      )}

      {timeModal && (
        <DateTimePicker
          testID='dateTimePicker'
          value={time}
          mode='time'
          is24Hour={true}
          display='default'
          onChange={(_, selectedDate) => {
            toggleTimeModal(!timeModal);
            const currentDate = selectedDate || date;
            setTime(currentDate);
          }}
        />
      )}
    </ScrollView>
  );
};
