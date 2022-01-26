import { View, Text } from "react-native";
import React from "react";

const ConvertScreen = ({ route }) => {
  console.log(route.params.name);
  console.log(route.params.symbol);
  console.log(route.params.currentPrice);
  return (
    <View>
      <Text>hejsan</Text>
    </View>
  );
};

export default ConvertScreen;
