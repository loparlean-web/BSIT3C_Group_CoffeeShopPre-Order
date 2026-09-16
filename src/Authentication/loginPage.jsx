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

export default function LoginPage({
  navigation,
  onLogin,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert(
        "Missing Information",
        "Please enter your email and password."
      );

      return;
    }

    const savedAccount =
      await AsyncStorage.getItem("account");

    if (!savedAccount) {
      Alert.alert(
        "No Account",
        "Please register an account first."
      );

      return;
    }

    const account = JSON.parse(savedAccount);

    if (
      email === account.email &&
      password === account.password
    ) {
      onLogin(account);
    } else {
      Alert.alert(
        "Login Failed",
        "Incorrect email or password."
      );
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>☕</Text>

      <Text style={styles.title}>
        Brew Café
      </Text>

      <Text style={styles.subtitle}>
        Coffee Shop Pre-Order
      </Text>

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
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
          LOGIN
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Register")
        }
      >
        <Text style={styles.register}>
          Don't have an account? Register
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

  logo: {
    fontSize: 70,
    textAlign: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#6F4E37",
  },

  subtitle: {
    textAlign: "center",
    color: "#777",
    marginBottom: 30,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#6F4E37",
    padding: 16,
    borderRadius: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
  },

  register: {
    textAlign: "center",
    marginTop: 20,
    color: "#6F4E37",
  },
});