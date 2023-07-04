import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import {
  VStack,
  Button,
  Select,
  Icon,
  ScrollView,
  TextArea,
  Center,
  Spinner,
} from "native-base";

import Icons from "react-native-vector-icons/FontAwesome5";
import RideBox from "../../../../components/RideBox";
import { Context } from "../../../../Providers/context";

export default ({ navigation, ...rest }) => {
  const { user, isDriver } = useContext(Context);

  const isSearch = rest?.route?.params?.isSearch;
  const isRequest = rest?.route?.params?.isRequest;

  const ride = {
    id: 41,
    from_address: "São Paulo",
    to_address: "São Carlos",
    date: "12/12/2021",
    time: "12:00",
    driverName: "Aniket Kumar",
    driverId: 1,
    passengers: [12, 45], // ids sla
    status: "Disponível",
  };

  const itsMine = user?.id == ride?.driverId;

  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState("0");

  const handleDeleteRide = () => {
    setLoading(true);

    try {
      // const response = await axios.post(
      //   "https://ufjfgo.herokuapp.com/register",
      //   userData
      // );

      Alert.alert("Sucesso!", "Carona excluída com sucesso!");
      navigation.goBack();
    } catch (err) {
      Alert.alert("Erro!", "Não foi possível excluir a carona.");
    }

    setLoading(false);
  };

  const handleRequestRide = () => {
    setLoading(true);

    try {
      // const response = await axios.post(
      //   "https://ufjfgo.herokuapp.com/register",
      //   userData
      // );

      Alert.alert("Sucesso!", "Carona solicitada com sucesso!");

      navigation.goBack();
    } catch (err) {
      Alert.alert("Erro!", "Não foi possível solicitar a carona.");
    }

    setLoading(false);
  };

  const handleCancelRide = () => {
    setLoading(true);

    try {
      // const response = await axios.post(
      //   "https://ufjfgo.herokuapp.com/register",
      //   userData
      // );

      Alert.alert("Sucesso!", "Carona cancelada com sucesso!");

      navigation.goBack();
    } catch (err) {
      Alert.alert("Erro!", "Não foi possível cancelar a carona.");
    }

    setLoading(false);
  };

  const handleAcceptRide = () => {
    setLoading(true);

    try {
      // const response = await axios.post(
      //   "https://ufjfgo.herokuapp.com/register",
      //   userData
      // );

      Alert.alert("Sucesso!", "Carona aceita com sucesso!");

      navigation.goBack();
    } catch (err) {
      Alert.alert("Erro!", "Não foi possível aceitar a carona.");
    }

    setLoading(false);
  };

  const handleRefuseRide = () => {
    setLoading(true);

    try {
      // const response = await axios.post(
      //   "https://ufjfgo.herokuapp.com/register",
      //   userData
      // );

      Alert.alert("Sucesso!", "Carona recusada com sucesso!");

      navigation.goBack();
    } catch (err) {
      Alert.alert("Erro!", "Não foi possível recusar a carona.");
    }

    setLoading(false);
  };

  const handleSendEvaluation = () => {
    setLoading(true);

    try {
      // const response = await axios.post(
      //   "https://ufjfgo.herokuapp.com/register",
      //   userData
      // );

      Alert.alert("Sucesso!", "Avaliação enviada com sucesso!");

      navigation.goBack();
    } catch (err) {
      Alert.alert("Erro!", "Não foi possível enviar a avaliação.");
    }

    setLoading(false);
  };

  return (
    <ScrollView bgColor='white'>
      <VStack
        flex='1'
        space='5'
        paddingX='10'
        paddingY='10'
        justifyContent='center'
      >
        <RideBox {...ride} disabled={loading} />

        {loading ? (
          <Center>
            <Spinner color='primary.500' size='lg' />
          </Center>
        ) : null}

        {itsMine ? (
          <Button
            size='lg'
            variant='outline'
            onPress={() => handleDeleteRide()}
            isDisabled={loading}
          >
            Excluir Carona
          </Button>
        ) : (
          <Button
            size='lg'
            variant='outline'
            leftIcon={<Icon as={Icons} name='paper-plane' size='lg' />}
            onPress={() =>
              navigation.navigate("ChatsStack", { screen: "Chat" })
            }
            isDisabled={loading}
          >
            Enviar Mensagem
          </Button>
        )}

        {isSearch ? (
          <>
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

            <Button
              size='lg'
              onPress={() => handleRequestRide()}
              isDisabled={loading}
            >
              Solicitar Carona
            </Button>

            <Button
              size='lg'
              variant='outline'
              onPress={() => handleCancelRide()}
              isDisabled={loading}
            >
              Cancelar Carona
            </Button>
          </>
        ) : null}

        {itsMine && isDriver && isRequest ? (
          <>
            <Button
              size='lg'
              onPress={() => handleAcceptRide()}
              isDisabled={loading}
            >
              Aceitar Carona
            </Button>

            <Button
              size='lg'
              variant='outline'
              onPress={() => handleRefuseRide()}
              isDisabled={loading}
            >
              Recusar Carona
            </Button>
          </>
        ) : null}

        {ride.status == "Finalizada" && itsMine ? (
          <>
            <TextArea
              h='24'
              placeholder='Deixe sua avaliação'
              isDisabled={loading}
            />

            <Button
              size='lg'
              onPress={() => handleSendEvaluation()}
              isDisabled={loading}
            >
              Enviar Avaliação
            </Button>
          </>
        ) : null}
      </VStack>
    </ScrollView>
  );
};
