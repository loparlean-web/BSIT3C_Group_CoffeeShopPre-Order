import React from "react";

import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export default function FavoriteButton({
  isFavorite,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.icon}>
        {isFavorite ? "❤️" : "♡"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
  },

  icon: {
    fontSize: 28,
  },
});