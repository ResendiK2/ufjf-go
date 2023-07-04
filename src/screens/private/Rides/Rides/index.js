import React, { useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { VStack, Button, Icon, FlatList, Center, Spinner } from "native-base";

import Icons from "react-native-vector-icons/FontAwesome5";
import RideBox from "../../../../components/RideBox";
import { useIsFocused } from "@react-navigation/native";
import { Context } from "../../../../Providers/context";

export default ({ navigation, ...rest }) => {
  const isFocused = useIsFocused();
  const isSearch = rest?.route?.params?.isSearch;

  const { isDriver } = useContext(Context);

  const [loading, setLoading] = useState(false);
  const [rides, setRides] = useState(rest?.route?.params?.rides || []);

  const getRides = async () => {
    // mock
    setRides([
      {
        id: 41,
        from_address: "São Paulo",
        to_address: "São Carlos",
        date: "12/12/2021",
        time: "12:00",
        driverName: "Aniket Kumar",
      },
      {
        id: 42,
        from_address: "São Paulo",
        to_address: "São Carlos",
        date: "12/12/2021",
        time: "12:00",
        driverName: "Aniket Kumar",
      },
    ]);

    if (isSearch) return;

    setLoading(true);

    try {
      // const response = await axios.post(
      //   "https://ufjfgo.herokuapp.com/rides/history",
      //   { id: user.id }
      // );
      // setRides(response.data.rides);
    } catch (err) {
      Alert.alert("Erro!", "Não foi possível carregar as caronas.");
      navigation.goBack();
    }

    setLoading(false);
  };

  useEffect(() => {
    getRides();
  }, [isFocused]);

  const renderItem = ({ item }) => (
    <RideBox
      {...item}
      edit={item.edit}
      disabled={loading}
      isSearch={isSearch}
      isHistory={!isSearch}
    />
  );

  const keyExtractor = (item) => item.id;

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
          disabled={loading}
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
          disabled={loading}
        >
          Oferecer Carona
        </Button>
      ) : null}

      {loading ? (
        <Center>
          <Spinner color='primary.500' size='lg' />
        </Center>
      ) : null}

      <FlatList
        data={rides}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </VStack>
  );
};
