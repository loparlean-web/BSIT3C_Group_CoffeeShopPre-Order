import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  NavigationContainer,
} from "@react-navigation/native";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import LoginPage from "./src/authentication/LoginPage";
import RegisterPage from "./src/authentication/RegisterPage";
import Dashboard from "./src/dashboard/Dashboard";
import Selection from "./src/selection/Selection";
import Purchase from "./src/purchase/Purchase";
import Favorites from "./src/favorites/Favorites";
import Profile from "./src/profile/Profile";
import OrderConfirmation from "./src/order/OrderConfirmation";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load saved data
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const savedUser = await AsyncStorage.getItem("user");
      const savedFavorites =
        await AsyncStorage.getItem("favorites");
      const savedOrders =
        await AsyncStorage.getItem("orders");

      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }

      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }

      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      }
    } catch (error) {
      console.log("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Login
  const handleLogin = async (userData) => {
    setUser(userData);

    await AsyncStorage.setItem(
      "user",
      JSON.stringify(userData)
    );
  };

  // Logout
  const handleLogout = async () => {
    setUser(null);
    setCart([]);

    await AsyncStorage.removeItem("user");
  };

  // Add to cart
  const addToCart = (item) => {
    setCart((currentCart) => [
      ...currentCart,
      {
        ...item,
        cartId: Date.now().toString(),
      },
    ]);
  };

  // Remove from cart
  const removeFromCart = (cartId) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.cartId !== cartId
      )
    );
  };

  // Add or remove favorite
  const toggleFavorite = async (coffee) => {
    let updatedFavorites;

    const alreadyFavorite = favorites.some(
      (item) => item.id === coffee.id
    );

    if (alreadyFavorite) {
      updatedFavorites = favorites.filter(
        (item) => item.id !== coffee.id
      );
    } else {
      updatedFavorites = [
        ...favorites,
        coffee,
      ];
    }

    setFavorites(updatedFavorites);

    await AsyncStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  // Place order
  const placeOrder = async () => {
    const newOrder = {
      id: Date.now().toString(),
      items: cart,
      total: cart.reduce(
        (sum, item) => sum + item.total,
        0
      ),
      date: new Date().toLocaleString(),
      status: "Pending",
    };

    const updatedOrders = [
      ...orders,
      newOrder,
    ];

    setOrders(updatedOrders);

    await AsyncStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );

    setCart([]);

    return newOrder;
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />

        <Text style={styles.loadingText}>
          Loading Brew Café...
        </Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>

        {!user ? (
          <>
            <Stack.Screen
              name="Login"
              options={{
                headerShown: false,
              }}
            >
              {(props) => (
                <LoginPage
                  {...props}
                  onLogin={handleLogin}
                />
              )}
            </Stack.Screen>

            <Stack.Screen
              name="Register"
              component={RegisterPage}
              options={{
                title: "Create Account",
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Dashboard"
              options={{
                headerShown: false,
              }}
            >
              {(props) => (
                <Dashboard
                  {...props}
                  cart={cart}
                  favorites={favorites}
                  user={user}
                />
              )}
            </Stack.Screen>

            <Stack.Screen
              name="Selection"
              options={{
                title: "Coffee Menu",
              }}
            >
              {(props) => (
                <Selection
                  {...props}
                  addToCart={addToCart}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              )}
            </Stack.Screen>

            <Stack.Screen
              name="Purchase"
              options={{
                title: "My Cart",
              }}
            >
              {(props) => (
                <Purchase
                  {...props}
                  cart={cart}
                  removeFromCart={removeFromCart}
                  placeOrder={placeOrder}
                />
              )}
            </Stack.Screen>

            <Stack.Screen
              name="Favorites"
              options={{
                title: "My Favorites",
              }}
            >
              {(props) => (
                <Favorites
                  {...props}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                  addToCart={addToCart}
                />
              )}
            </Stack.Screen>

            <Stack.Screen
              name="Profile"
              options={{
                title: "My Profile",
              }}
            >
              {(props) => (
                <Profile
                  {...props}
                  user={user}
                  orders={orders}
                  onLogout={handleLogout}
                />
              )}
            </Stack.Screen>

            <Stack.Screen
              name="OrderConfirmation"
              component={OrderConfirmation}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
});