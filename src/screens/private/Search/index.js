import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import {
  VStack,
  Text,
  Input,
  Button,
  HStack,
  FormControl,
  Select,
  Switch,
  Center,
  Spinner,
} from "native-base";

import Ionicons from "react-native-vector-icons/FontAwesome5";
import { Context } from "../../../Providers/context";

export default ({ navigation }) => {
  const { setIsLogged } = useContext(Context);

  const [loading, setLoading] = useState(false);

  const [people, setPeople] = useState("0");
  const [justWomen, setJustWomen] = useState(false);

  handleSearch = () => {
    setLoading(true);

    try {
      // const response = await axios.post(
      //   "https://ufjfgo.herokuapp.com/search",
      //   { people, justWomen ...}
      // );

      Alert.alert("Sucesso!", "Busca realizada com sucesso!");

      navigation.navigate("Rides", {
        isSearch: true /* rides: response.data */,
      });
    } catch (err) {
      Alert.alert("Erro!", "Não foi possível realizar a busca.");
    }

    setLoading(false);
  };

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
            isDisabled={loading}
          />

          <Input
            type='text'
            placeholder='Para (Local de chegada)'
            onChangeText={(text) => setPassword(text)}
            isDisabled={loading}
          />

          <Select
            selectedValue={people}
            placeholder='Número de pessoas'
            onValueChange={(value) => setPeople(value)}
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
              isDisabled={loading}
              isChecked={justWomen}
              onToggle={() => setJustWomen(!justWomen)}
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

      <Button
        w='100%'
        isDisabled={loading}
        onPress={() => navigation.navigate("Rides", { isSearch: true })}
      >
        Buscar
      </Button>
      <Button
        w='100%'
        variant='outline'
        isDisabled={loading}
        onPress={() => setIsLogged(false)}
      >
        Sair
      </Button>
    </VStack>
  );
};
