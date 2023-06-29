import React, { useState } from "react";
import { VStack, Input, Button, FormControl } from "native-base";

export default ({ navigation }) => {
  const [email, setEmail] = useState("");

  handleEmail = () => {
    console.log({ email });
    navigation.navigate("Login");
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
          />
        </VStack>
      </FormControl>

      <VStack>
        <Button w='100%' onPress={() => handleEmail()}>
          Enviar Email
        </Button>
      </VStack>
    </VStack>
  );
};
