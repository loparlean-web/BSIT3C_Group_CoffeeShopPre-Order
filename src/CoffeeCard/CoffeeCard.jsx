import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function CoffeeCard({
  coffee,
  isFavorite,
  onFavorite,
  onSelect,
}) {
  return (
    <View style={styles.card}>

      <View style={styles.top}>

        <Text style={styles.image}>
          {coffee.emoji}
        </Text>

        <FavoriteButton
          isFavorite={isFavorite}
          onPress={() =>
            onFavorite(coffee)
          }
        />

      </View>

      <Text style={styles.name}>
        {coffee.name}
      </Text>

      <Text style={styles.category}>
        {coffee.category}
      </Text>

      <Text style={styles.price}>
        ₱{coffee.price}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => onSelect(coffee)}
      >
        <Text style={styles.buttonText}>
          Customize
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 3,
  },

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  image: {
    fontSize: 55,
  },

  name: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#6F4E37",
  },

  category: {
    color: "#777",
    marginVertical: 3,
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#6F4E37",
    padding: 12,
    borderRadius: 8,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});