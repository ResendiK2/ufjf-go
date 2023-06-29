import React, { useState } from "react";
import { VStack, Button, Icon, FlatList } from "native-base";

import Icons from "react-native-vector-icons/FontAwesome5";
import RideBox from "../../../../Components/RideBox";

export default ({ navigation, ...rest }) => {
  const isSearch = rest?.route?.params?.isSearch;
  const isDriver = rest?.route?.params?.isDriver || true;

  return (
    <VStack
      flex='1'
      space='5'
      paddingX='10'
      paddingY='5'
      justifyContent='center'
      bgColor='white'
    >
      {isSearch ? (
        <Button
          size='lg'
          variant='outline'
          leftIcon={<Icon as={Icons} name='bell' size='lg' />}
        >
          Criar alerta
        </Button>
      ) : null}

      {isDriver ? (
        <Button
          size='lg'
          variant='outline'
          leftIcon={<Icon as={Icons} name='plus' size='lg' />}
          onPress={() => navigation.navigate("RidesForm")}
        >
          Oferecer Carona
        </Button>
      ) : null}

      <FlatList
        data={[
          {
            id: 41,
            from_adress: "São Paulo",
            to_adress: "São Carlos",
            datetime: "12/12/2021",
            driverName: "Aniket Kumar",
          },
          {
            id: 42,
            from_adress: "São Paulo",
            to_adress: "São Carlos",
            datetime: "12/12/2021",
            driverName: "Aniket Kumar",
          },
        ]}
        renderItem={({ item }) => (
          <RideBox {...item} edit={item.edit} isSearch={isSearch} />
        )}
        keyExtractor={(item) => item.id}
      />
    </VStack>
  );
};
