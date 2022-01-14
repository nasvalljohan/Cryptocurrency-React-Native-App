import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.bigbox}>
      <Text style={styles.bigtitle}>CryptXchange</Text>
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

export default Header;
