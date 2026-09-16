import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function CartItem({
  item,
  onRemove,
}) {
  return (
    <View style={styles.card}>

      <View style={styles.info}>

        <Text style={styles.name}>
          {item.emoji} {item.name}
        </Text>

        <Text>
          Size: {item.size}
        </Text>

        <Text>
          Sugar: {item.sugar}
        </Text>

        <Text>
          Quantity: {item.quantity}
        </Text>

        <Text style={styles.price}>
          ₱{item.total}
        </Text>

      </View>

      <TouchableOpacity
        onPress={() => onRemove(item.cartId)}
      >
        <Text style={styles.remove}>
          Remove
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6F4E37",
  },

  price: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 5,
  },

  remove: {
    color: "red",
    marginLeft: 10,
  },
});