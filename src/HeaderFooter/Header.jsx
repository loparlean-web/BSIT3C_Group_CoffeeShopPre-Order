import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>
        ☕ Brew Café
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6F4E37",
    padding: 20,
  },

  logo: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});