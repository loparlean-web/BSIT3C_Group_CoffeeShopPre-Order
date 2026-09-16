import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RegisterPage({
  navigation,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert(
        "Missing Information",
        "Please complete all fields."
      );

      return;
    }

    const account = {
      name,
      email,
      password,
    };

    await AsyncStorage.setItem(
      "account",
      JSON.stringify(account)
    );

    Alert.alert(
      "Registration Successful",
      "Your account has been created.",
      [
        {
          text: "OK",
          onPress: () =>
            navigation.navigate("Login"),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Create Account
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>
          REGISTER
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
    justifyContent: "center",
    padding: 25,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6F4E37",
    textAlign: "center",
    marginBottom: 25,
  },

  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#6F4E37",
    padding: 16,
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});