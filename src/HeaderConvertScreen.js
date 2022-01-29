import { View, Text, StyleSheet } from "react-native";
import React from "react";

const HeaderConvertModal = () => {
  return (
    <View style={styles.bigbox}>
      <Text style={styles.bigtitle}>Convert</Text>
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
export default HeaderConvertModal;
