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
    fontSize: 24,
    fontWeight: "700",
  },
  bigbox: {
    paddingHorizontal: 16,
  },
});

export default HeaderCoinListScreen;
