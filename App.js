import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginPage from "./src/loginPage";
import Dashboard from "./src/dashboard/Dashboard";
import Selection from "./src/selection";
import Purchase from "./src/purchase/Purchase";

const Stack = createNativeStackNavigator();

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((currentCart) => [...currentCart, item]);
  };

  const removeFromCart = (index) => {
    setCart((currentCart) =>
      currentCart.filter((_, i) => i !== index)
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Dashboard"
          options={{ headerShown: false }}
        >
          {(props) => (
            <Dashboard
              {...props}
              cart={cart}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Selection"
          options={{ title: "Coffee Selection" }}
        >
          {(props) => (
            <Selection
              {...props}
              addToCart={addToCart}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Purchase"
          options={{ title: "My Cart" }}
        >
          {(props) => (
            <Purchase
              {...props}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          )}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}