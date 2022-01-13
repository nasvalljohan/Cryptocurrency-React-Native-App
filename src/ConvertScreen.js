import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { CoinFormation } from "../App";
import { useContext } from "react";

const ConvertScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>ConvertScreenNNN</Text>
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

export default ConvertScreen;
