import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PhotoList from "./screens/PhotoList";
import PhotoDetail from "./screens/PhotoDetail";

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="PhotoList">
      <Stack.Screen name="PhotoList" component={PhotoList} />
      <Stack.Screen name="PhotoDetail" component={PhotoDetail} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
