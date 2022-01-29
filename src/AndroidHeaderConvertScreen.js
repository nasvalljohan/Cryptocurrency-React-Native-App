import { View, Text, StyleSheet } from "react-native";
import React from "react";

const AndroidHeaderConvertScreen = () => {
  return (
    <View style={styles.androidHeader}>
      <Text style={styles.bigtitle}>Converter</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  androidHeader: {
    alignItems: "center",
    height: 70,
    backgroundColor: "white",
  },
  bigtitle: {
    marginTop: 30,
    flex: 1,
    fontSize: 23,
    fontWeight: "600",
    color: "#472A60",
  },
});
export default AndroidHeaderConvertScreen;
