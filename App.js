import ConvertScreen from "./src/ConvertScreen";
import SplashScreen from "./src/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import ListData from "./src/ListData";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CryptX">
        <Stack.Screen name="CRYPTX" component={SplashScreen} />
        <Stack.Screen name="CRYPTX COINS" component={ListData} />
        <Stack.Screen name="CRYPTXCHANGE" component={ConvertScreen} />
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
