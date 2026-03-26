import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./Frontend/Screens/HomeScreen.js";
import AddEditScreen from "./Frontend/Screens/AddEditScreen.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Edit" component={AddEditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}