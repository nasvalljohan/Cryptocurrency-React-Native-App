import ConvertScreen from "./src/ConvertScreen";
import HomeScreen from "./src/HomeScreen";
import CoinListScreen from "./src/CoinListScreen";
import Header from "./src/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CryptX">
        <Stack.Screen
          name="CRYPTX"
          component={HomeScreen}
          options={{ headerTitle: () => <Header /> }}
        />
        <Stack.Screen
          name="CRYPTX COINS"
          component={CoinListScreen}
          options={{ headerTitle: () => <Header /> }}
        />
        <Stack.Screen
          name="CRYPTXCHANGE"
          component={ConvertScreen}
          options={{ headerTitle: () => <Header /> }}
        />
      </Stack.Navigator>
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
