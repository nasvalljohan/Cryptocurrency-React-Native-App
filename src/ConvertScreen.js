import React, { useState } from "react";
import arrows from "../assets/arrows.png";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

const ConvertScreen = ({ route }) => {
  const [switchIsEnabled, setSwitchIsEnabled] = useState(true);
  const [input, setInput] = useState();

  const currencyChange = () => {
    setSwitchIsEnabled((previousState) => !previousState);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="always" scrollEnabled={false}>
      <View style={styles.container}>
        <View>
          <View style={styles.boxes}>
            <View style={styles.leftbox}>
              {switchIsEnabled ? (
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={{ uri: route.params.logoURL }}
                  />
                  <Text>{route.params.name}</Text>
                </View>
              ) : (
                <Text>SEK</Text>
              )}
            </View>

            <View style={styles.rightbox}>
              <Text>Covert From</Text>
              <TextInput
                placeholder="Enter amount"
                keyboardType="numeric"
                onChangeText={setInput}
              />
            </View>
          </View>
          <View style={styles.topdivder} />
        </View>
        <View style={styles.imgbox}>
          <TouchableWithoutFeedback onPress={currencyChange}>
            <Image style={{ width: 40, height: 40 }} source={arrows} />
          </TouchableWithoutFeedback>
          <Text>
            Current price: 1 {route.params.symbol.toUpperCase()} ={" "}
            {route.params.currentPrice}
          </Text>
        </View>

        <View>
          <View style={styles.botdivider} />
          <View style={styles.boxes}>
            <View style={styles.leftbox}>
              {switchIsEnabled ? (
                <Text>SEK</Text>
              ) : (
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={{ uri: route.params.logoURL }}
                  />
                  <Text>{route.params.name}</Text>
                </View>
              )}
            </View>

            <View style={styles.rightbox}>
              <Text>Convert To</Text>
              {switchIsEnabled ? (
                <Text>{input * route.params.currentPrice} SEK</Text>
              ) : (
                <Text>
                  {input / route.params.currentPrice}{" "}
                  {route.params.symbol.toUpperCase()}{" "}
                </Text>
              )}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>

    //TODO, lägg in info om coin nedanför.
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
  topdivder: {
    width: "92%",
    marginTop: 15,
    height: 1,
    backgroundColor: "grey",
    alignSelf: "center",
  },
  botdivider: {
    width: "92%",
    marginBottom: 15,
    height: 1,
    backgroundColor: "grey",
    alignSelf: "center",
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
