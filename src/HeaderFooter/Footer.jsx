import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Brew Café © 2026
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 15,
    alignItems: "center",
    backgroundColor: "#F2E6D9",
  },

  footerText: {
    color: "#6F4E37",
  },
});