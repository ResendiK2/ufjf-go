import React, { useContext, useState } from "react";
import axios from "axios";
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
import { Context } from "../../../../Providers/context";

export default () => {
  const { user } = useContext(Context);

  const [loading, setLoading] = useState(false);

  const [dateModal, toggleDateModal] = useState(false);
  const [timeModal, toggleTimeModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [vagas, setVagas] = useState("2");
  const [from, setFrom] = useState("home");
  const [destiny, setDestiny] = useState("uf");
  const [justWomen, setJustWomen] = useState(false);

  const handleRide = async () => {

    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8001/rides/create",
        { date, time, vagas, from, destiny, justWomen, driver_id: user.id },
      );
      console.log(response);

      Alert.alert("Sucesso!", "Carona cadastrada com sucesso!");

      navigation.goBack();
    } catch (err) {
      console.log(err);
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
              value={from}
              onChangeText={(text) => setFrom(text)}
              isDisabled={loading}
            />

            <Input
              type='text'
              placeholder='Para (Local de chegada)'
              value={destiny}
              onChangeText={(text) => setDestiny(text)}
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
