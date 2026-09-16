import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>

      <Text style={styles.text}>
        Brew Café © 2026
      </Text>

      <Text style={styles.text}>
        Fresh Coffee • Happy Customers
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 12,
    alignItems: "center",
    backgroundColor: "#F2E6D9",
  },

  text: {
    color: "#6F4E37",
    fontSize: 12,
  },
});