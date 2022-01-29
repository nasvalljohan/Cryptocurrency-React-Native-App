import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HeaderCoinListScreen = () => {
  return (
    <View style={styles.bigbox}>
      <Text style={styles.bigtitle}>Select coin to convert</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bigtitle: {
    flex: 1,
    fontSize: 23,
    fontWeight: "500",
    color: "#472A60",
  },
  bigbox: {
    paddingHorizontal: 16,
  },
});

export default HeaderCoinListScreen;
