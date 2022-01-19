import HomeScreen from "./src/HomeScreen";
import CoinListScreen from "./src/CoinListScreen";
import HeaderHomeScreen from "./src/HeaderHomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import HeaderCoinListScreen from "./src/HeaderCoinListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CryptX">
        <Stack.Screen
          name="CRYPTX"
          component={HomeScreen}
          options={{ headerTitle: () => <HeaderHomeScreen /> }}
        />
        <Stack.Screen
          name="CRYPTX COINS"
          component={CoinListScreen}
          options={{ headerTitle: () => <HeaderCoinListScreen /> }}
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
