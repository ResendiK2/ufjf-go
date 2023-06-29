import React, { useContext, useState } from "react";
import {
  VStack,
  Text,
  Input,
  Button,
  HStack,
  FormControl,
  Select,
  Icon,
  Avatar,
  Spacer,
  ScrollView,
  Switch,
  TextArea,
} from "native-base";

import Icons from "react-native-vector-icons/FontAwesome5";
import { Context } from "../../../../Providers/context";
import RideBox from "../../../../Components/RideBox";

export default ({ navigation, ...rest }) => {
  const itsMine = rest?.route?.params?.itsMine;
  const isSearch = rest?.route?.params?.isSearch;
  const isAnswer = rest?.route?.params?.isAnswer;
  const isAssessment = rest?.route?.params?.isAssessment;

  const [people, setPeople] = useState("0");

  const item = {
    id: 41,
    from_adress: "São Paulo",
    to_adress: "São Carlos",
    datetime: "12/12/2021",
    driverName: "Aniket Kumar",
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
        <RideBox {...item} />

        {itsMine ? (
          <Button size='lg' variant='outline'>
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
            >
              <Select.Item label='Numero de pessoas' value='0' disabled />
              <Select.Item label='1' value='1' />
              <Select.Item label='2' value='2' />
              <Select.Item label='3' value='3' />
              <Select.Item label='4' value='4' />
            </Select>

            <Button size='lg'>Solicitar Carona</Button>

            <Button size='lg' variant='outline'>
              Cancelar Carona
            </Button>
          </>
        ) : null}

        {isAnswer ? (
          <>
            <Button size='lg'>Aceitar Carona</Button>

            <Button size='lg' variant='outline'>
              Recusar Carona
            </Button>
          </>
        ) : null}

        {isAssessment ? (
          <>
            <TextArea h='24' placeholder='Deixe sua avaliação' />

            <Button size='lg'>Enviar Avaliação</Button>
          </>
        ) : null}
      </VStack>
    </ScrollView>
  );
};
