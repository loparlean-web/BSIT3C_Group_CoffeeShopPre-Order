import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import CoffeeCard from "../CoffeeCard/CoffeeCard";

const coffeeData = [
  {
    id: "1",
    name: "Iced Coffee",
    price: 80,
    category: "Coffee",
    emoji: "🧊☕",
  },

  {
    id: "2",
    name: "Cappuccino",
    price: 100,
    category: "Coffee",
    emoji: "☕",
  },

  {
    id: "3",
    name: "Cafe Latte",
    price: 110,
    category: "Coffee",
    emoji: "🥛☕",
  },

  {
    id: "4",
    name: "Caramel Macchiato",
    price: 120,
    category: "Special",
    emoji: "🍮☕",
  },

  {
    id: "5",
    name: "Chocolate Frappe",
    price: 130,
    category: "Frappe",
    emoji: "🍫☕",
  },
];

export default function Selection({
  addToCart,
  favorites,
  toggleFavorite,
}) {
  const [search, setSearch] = useState("");

  const [selectedCoffee, setSelectedCoffee] =
    useState(null);

  const [size, setSize] = useState("Medium");
  const [sugar, setSugar] = useState("50%");
  const [quantity, setQuantity] = useState(1);

  const filteredCoffee = coffeeData.filter(
    (coffee) =>
      coffee.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const openCustomization = (coffee) => {
    setSelectedCoffee(coffee);
    setQuantity(1);
    setSize("Medium");
    setSugar("50%");
  };

  const addCustomizedCoffee = () => {
    if (!selectedCoffee) {
      return;
    }

    let price = selectedCoffee.price;

    if (size === "Large") {
      price += 20;
    }

    const total = price * quantity;

    addToCart({
      ...selectedCoffee,
      size,
      sugar,
      quantity,
      total,
    });

    Alert.alert(
      "Added to Cart",
      `${selectedCoffee.name} was added to your cart.`
    );

    setSelectedCoffee(null);
  };

  if (selectedCoffee) {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Customize Your Drink
        </Text>

        <Text style={styles.selectedName}>
          {selectedCoffee.emoji}{" "}
          {selectedCoffee.name}
        </Text>

        <Text style={styles.label}>
          Size
        </Text>

        <View style={styles.options}>
          {["Small", "Medium", "Large"].map(
            (item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.option,
                  size === item &&
                    styles.selectedOption,
                ]}
                onPress={() => setSize(item)}
              >
                <Text>
                  {item}
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>

        <Text style={styles.label}>
          Sugar Level
        </Text>

        <View style={styles.options}>
          {["0%", "50%", "100%"].map(
            (item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.option,
                  sugar === item &&
                    styles.selectedOption,
                ]}
                onPress={() => setSugar(item)}
              >
                <Text>
                  {item}
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>

        <Text style={styles.label}>
          Quantity
        </Text>

        <View style={styles.quantity}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() =>
              setQuantity(
                Math.max(1, quantity - 1)
              )
            }
          >
            <Text>−</Text>
          </TouchableOpacity>

          <Text style={styles.quantityText}>
            {quantity}
          </Text>

          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() =>
              setQuantity(quantity + 1)
            }
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={addCustomizedCoffee}
        >
          <Text style={styles.addText}>
            Add to Cart
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedCoffee(null)}
        >
          <Text style={styles.cancel}>
            Back to Menu
          </Text>
        </TouchableOpacity>

      </View>
    );
  }

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.search}
        placeholder="Search coffee..."
        value={search}
        onChangeText={setSearch}
      />

      <Text style={styles.title}>
        Our Coffee Menu ☕
      </Text>

      <FlatList
        data={filteredCoffee}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CoffeeCard
            coffee={item}
            isFavorite={favorites.some(
              (favorite) =>
                favorite.id === item.id
            )}
            onFavorite={toggleFavorite}
            onSelect={openCustomization}
          />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
    padding: 15,
  },

  search: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 14,
    borderRadius: 10,
    marginBottom: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6F4E37",
    marginBottom: 15,
  },

  selectedName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  label: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 8,
  },

  options: {
    flexDirection: "row",
    gap: 10,
  },

  option: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DDD",
  },

  selectedOption: {
    backgroundColor: "#E5D0BA",
    borderColor: "#6F4E37",
  },

  quantity: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  quantityButton: {
    backgroundColor: "#E5D0BA",
    padding: 12,
    borderRadius: 8,
  },

  quantityText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  addButton: {
    backgroundColor: "#6F4E37",
    padding: 17,
    borderRadius: 10,
    marginTop: 30,
  },

  addText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },

  cancel: {
    textAlign: "center",
    marginTop: 20,
    color: "#6F4E37",
  },
});