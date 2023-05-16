import "react-native-gesture-handler";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import TodoApp from "./components/TodoApp";
import About from "./screen/About";
import HomeScreen from "./screen/Home";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => {
          return {
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              // if (route.name === "Home") {
              //   iconName = focused ? "home" : "home-outline";
              // } else if (route.name === "Todos") {
              //   iconName = focused ? "list" : "list-outline";
              // } else if (route.name === "About") {
              //   iconName = focused ? "person" : "person-outline";
              // }

              switch (route.name) {
                case "Home":
                  iconName = focused ? "home" : "home-outline";
                  break;
                case "Todos":
                  iconName = focused ? "list" : "list-outline";
                  break;
                case "About":
                  iconName = focused ? "person" : "person-outline";
                  break;
                default:
                  iconName = "albums-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            // tabBarActiveTintColor: "tomato",
            // tabBarInactiveTintColor: "green",
          };
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Todos" component={TodoApp} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
