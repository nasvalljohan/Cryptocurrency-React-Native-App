import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  ScrollView,
} from "react-native";

const ConvertScreen = ({ route }) => {
  /*console.log(route.params.name);
  console.log(route.params.symbol);
  console.log(route.params.currentPrice);
  console.log(route.params.priceChangePercentage);
  console.log(route.params.logoURL); */
  const [switchIsEnabled, setSwitchIsEnabled] = useState(true);
  const [input, setInput] = useState();

  const currencyChange = () => {
    setSwitchIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" scrollEnabled={false}>
        <View>
          {switchIsEnabled ? (
            <Text>Convert from SEK to {route.params.name}</Text>
          ) : (
            <Text>Convert from {route.params.name} to SEK</Text>
          )}
          <TextInput
            placeholder="Enter amount"
            keyboardType="numeric"
            onChangeText={setInput}
          />

          {switchIsEnabled ? (
            <Text>
              {input / route.params.currentPrice}{" "}
              {route.params.symbol.toUpperCase()}
            </Text>
          ) : (
            <Text>{input * route.params.currentPrice} SEK </Text>
          )}
        </View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={switchIsEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={currencyChange}
          value={switchIsEnabled}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default ConvertScreen;
