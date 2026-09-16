import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function LoginPage({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "" || password === "") {
      Alert.alert("Error", "Please enter your username and password.");
      return;
    }

    navigation.replace("Dashboard");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>☕</Text>

      <Text style={styles.title}>
        Brew Café
      </Text>

      <Text style={styles.subtitle}>
        Coffee Shop Pre-order App
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
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
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
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
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});