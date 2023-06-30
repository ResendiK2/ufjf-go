import React, { useState } from "react";
import {
  VStack,
  Input,
  Button,
  FormControl,
  Center,
  Spinner,
} from "native-base";
import { Alert } from "react-native";

export default ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");

  handleEmail = async () => {
    setLoading(true);

    try {
      // const response = await axios.post(
      //   "https://ufjfgo.herokuapp.com/forgot_password",
      //   { email }
      // );

      Alert.alert("Sucesso!", "Email enviado com sucesso!");

      navigation.navigate("SignIn");
    } catch (err) {
      Alert.alert("Erro!", "Não foi possível enviar o email.");
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
      <FormControl>
        <VStack space='5'>
          <Input
            type='email'
            placeholder='Email'
            onChangeText={(text) => setEmail(text)}
            isDisabled={loading}
          />
        </VStack>
      </FormControl>

      {loading ? (
        <Center>
          <Spinner color='primary.500' size='lg' />
        </Center>
      ) : null}

      <VStack>
        <Button w='100%' onPress={() => handleEmail()} isDisabled={loading}>
          Enviar Email
        </Button>
      </VStack>
    </VStack>
  );
};
