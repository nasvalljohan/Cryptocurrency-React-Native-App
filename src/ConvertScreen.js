import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  ScrollView,
  Image,
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
    <ScrollView keyboardShouldPersistTaps="always" scrollEnabled={false}>
      <View style={styles.container}>
        <View style={{ justifyContent: "space-around" }}>
          <View style={styles.boxes}>
            <View style={styles.leftbox}>
              <Text>Currency</Text>
            </View>

            <View style={styles.rightbox}>
              <Text>Covert From</Text>
            </View>
          </View>
          <View style={styles.divider1} />
        </View>
        <View style={styles.imgbox}>
          <Image
            style={{ width: 40, height: 40 }}
            source={{
              uri: "https://cdn1.iconfinder.com/data/icons/material-set-6/48/598-512.png",
            }}
          />
        </View>

        <View style={{ justifyContent: "space-around" }}>
          <View style={styles.divider2} />
          <View style={styles.boxes}>
            <View style={styles.leftbox}>
              <Text>Currency</Text>
            </View>

            <View style={styles.rightbox}>
              <Text>Convert To</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  boxes: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  leftbox: {
    backgroundColor: "white",
    width: 130,
    height: 65,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  rightbox: {
    padding: 4,
    width: 220,
    height: 65,
    backgroundColor: "lightgrey",
    flexDirection: "column",
  },
  divider1: {
    marginTop: 15,
    paddingHorizontal: 16,
    height: 1,
    backgroundColor: "black",
  },
  divider2: {
    marginBottom: 15,
    paddingHorizontal: 16,
    height: 1,
    backgroundColor: "red",
  },
  imgbox: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",

    margin: 10,
    marginLeft: 60,
  },
});

export default ConvertScreen;

{
  /* 

      <View style={styles.container}>
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
      </View>


*/
}
