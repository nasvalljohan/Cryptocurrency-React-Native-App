import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>SplashSCreeeen</Text>
      <Button
        title="CoinScreen"
        onPress={() => navigation.navigate("CRYPTX COINS")}
      />
      <Button
        title="ConvertScreen"
        onPress={() => navigation.navigate("CRYPTXCHANGE")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
