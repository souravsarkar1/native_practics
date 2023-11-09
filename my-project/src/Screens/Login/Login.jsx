import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, TextInput } from 'react-native-paper';

function LoginSecren() {
    const [email, setEmail] = useState("");

    const handleLogin = () => {
        console.log(email);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Login!</Text>
            <TextInput
            label="Email"
            value={email}
            onChangeText={email => setEmail(email)}
          />
            <Button buttonColor="green" onPress={handleLogin}>Click Me!</Button>
        </View>
    );
}

export default LoginSecren;

