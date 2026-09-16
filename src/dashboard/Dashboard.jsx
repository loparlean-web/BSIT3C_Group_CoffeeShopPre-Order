import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";

export default function Dashboard({
  navigation,
  cart,
  favorites,
  user,
}) {
  return (
    <View style={styles.container}>

      <Header />

      <ScrollView>

        <View style={styles.content}>

          <Text style={styles.welcome}>
            Hello, {user?.name || "Customer"}! 👋
          </Text>

          <Text style={styles.title}>
            What would you like today?
          </Text>

          <Text style={styles.subtitle}>
            Fresh coffee, prepared just for you.
          </Text>

          <TouchableOpacity
            style={styles.mainButton}
            onPress={() =>
              navigation.navigate("Selection")
            }
          >
            <Text style={styles.buttonText}>
              ☕ Browse Coffee
            </Text>
          </TouchableOpacity>

          <View style={styles.row}>

            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate("Favorites")
              }
            >
              <Text style={styles.icon}>
                ❤️
              </Text>

              <Text style={styles.cardText}>
                Favorites
              </Text>

              <Text>
                {favorites.length} saved
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate("Purchase")
              }
            >
              <Text style={styles.icon}>
                🛒
              </Text>

              <Text style={styles.cardText}>
                Cart
              </Text>

              <Text>
                {cart.length} item(s)
              </Text>
            </TouchableOpacity>

          </View>

          <TouchableOpacity
            style={styles.profileButton}
            onPress={() =>
              navigation.navigate("Profile")
            }
          >
            <Text style={styles.profileText}>
              👤 My Profile
            </Text>
          </TouchableOpacity>

        </View>

      </ScrollView>

      <Footer />

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

  welcome: {
    fontSize: 18,
    color: "#6F4E37",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#6F4E37",
    marginTop: 10,
  },

  subtitle: {
    color: "#777",
    marginBottom: 25,
  },

  mainButton: {
    backgroundColor: "#6F4E37",
    padding: 18,
    borderRadius: 12,
    marginBottom: 20,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },

  row: {
    flexDirection: "row",
    gap: 12,
  },

  card: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },

  icon: {
    fontSize: 30,
  },

  cardText: {
    fontSize: 17,
    fontWeight: "bold",
    marginVertical: 5,
  },

  profileButton: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "#6F4E37",
    borderRadius: 10,
  },

  profileText: {
    textAlign: "center",
    color: "#6F4E37",
    fontWeight: "bold",
  },
});