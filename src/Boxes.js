import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Boxes = ({
  name,
  symbol,
  currentPrice,
  priceChangePercentage,
  logoURL,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Converter", {
          name,
          symbol,
          currentPrice,
          priceChangePercentage,
          logoURL,
        })
      }
    >
      <View style={styles.box}>
        <View style={styles.leftbox}>
          <Image
            source={{
              uri: logoURL,
            }}
            style={styles.images}
          />
          <View style={styles.leftminibox}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
          </View>
        </View>
        <View style={styles.rightbox}>
          <Text style={styles.title}>{currentPrice} SEK</Text>

          <Text style={styles.subtitle}>
            {priceChangePercentage.toFixed(2)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
// TODO Ändra färg på procent röd/grön
const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftbox: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftminibox: {
    marginLeft: 8,
  },
  rightbox: {
    alignItems: "flex-end",
  },
  images: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
    color: "darkgrey",
  },
});
export default Boxes;
