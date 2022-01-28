import HomeScreen from "./src/HomeScreen";
import CoinListScreen from "./src/CoinListScreen";
import ConvertScreen from "./src/ConvertScreen";
import HeaderConvertScreen from "./src/HeaderConvertScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, StyleSheet } from "react-native";
import HeaderCoinListScreen from "./src/HeaderCoinListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CryptX">
        <Stack.Screen
          name="CRYPTX"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        {/* Ingen header visas om det är andoid, header separat i varje komponent för android */}
        <Stack.Screen
          name="CRYPTX COINS"
          component={CoinListScreen}
          options={{
            headerShown: Platform.OS === "ios" ? true : false,
            headerTitle: () =>
              Platform.OS === "ios" ? <HeaderCoinListScreen /> : null,
          }}
        />
        <Stack.Screen
          name="Converter"
          component={ConvertScreen}
          options={{
            presentation: "modal",
            headerShown: Platform.OS === "ios" ? true : false,
            headerTitle: () =>
              Platform.OS === "android" ? <HeaderConvertScreen /> : null,
          }}
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
