import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import HeaderFooter from "../HeaderFooter/HeaderFooter";

export default function Dashboard({ navigation, cart }) {
  return (
    <View style={styles.container}>

      <HeaderFooter />

      <View style={styles.content}>

        <Text style={styles.title}>
          Welcome to Brew Café ☕
        </Text>

        <Text style={styles.text}>
          Order your favorite coffee from our menu.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Selection")}
        >
          <Text style={styles.buttonText}>
            ☕ Browse Coffee
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Purchase")}
        >
          <Text style={styles.buttonText}>
            🛒 My Cart ({cart.length})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logout}
          onPress={() => navigation.replace("Login")}
        >
          <Text style={styles.logoutText}>
            Logout
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#6F4E37",
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#6F4E37",
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },

  logout: {
    padding: 15,
  },

  logoutText: {
    textAlign: "center",
    color: "red",
  },
});