import HomeScreen from "./src/HomeScreen";
import CoinListScreen from "./src/CoinListScreen";
import ConvertScreen from "./src/ConvertScreen";
import HeaderHomeScreen from "./src/HeaderHomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
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

        <Stack.Screen
          name="Converter"
          component={ConvertScreen}
          options={{ presentation: "modal" }}
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
