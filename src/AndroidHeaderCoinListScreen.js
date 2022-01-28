import { View, Text, StyleSheet } from "react-native";
import React from "react";

const AndroidHeaderCoinListScreen = () => {
  return (
    <View style={styles.androidHeader}>
      <Text style={styles.bigtitle}>Select coin to convert</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  androidHeader: {
    alignItems: "center",
    height: 70,
    borderWidth: 0.2,
    borderBottomColor: "#fce0de",
  },
  bigtitle: {
    marginTop: 30,
    flex: 1,
    fontSize: 24,
    fontWeight: "700",
  },
});
export default AndroidHeaderCoinListScreen;
