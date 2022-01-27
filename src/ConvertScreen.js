import React, { useState } from "react";
import arrows from "../assets/arrows.png";
import sweflag from "../assets/sweflag.png";
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
        {/* ROW 1 - Boxes below */}
        <View style={styles.convertxt}>
          <Text>Covert From</Text>
        </View>
        <View>
          <View style={styles.boxes}>
            {/*ROW 1 - Left box*/}
            <View style={styles.leftbox}>
              {switchIsEnabled ? (
                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={styles.image}
                    source={{ uri: route.params.logoURL }}
                  />
                  <Text>{route.params.name}</Text>
                </View>
              ) : (
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                  <Image source={sweflag} style={styles.image} />
                  <Text>SEK</Text>
                </View>
              )}
            </View>
            {/* ROW 1 - Right box */}
            <View style={styles.rightbox}>
              <TextInput
                placeholder="Enter amount"
                keyboardType="numeric"
                onChangeText={setInput}
              />
            </View>
          </View>

          {/* ROW 1 - CODE END */}
          <View style={styles.topdivder} />
        </View>
        {/* Swap-arrow & current price below */}
        <View style={styles.imgbox}>
          <TouchableWithoutFeedback onPress={currencyChange}>
            <Image style={{ width: 40, height: 40 }} source={arrows} />
          </TouchableWithoutFeedback>
          <Text>
            Current price: 1 {route.params.symbol.toUpperCase()} ={" "}
            {route.params.currentPrice} SEK
          </Text>
        </View>
        {/* ROW 2 - Boxes below */}
        <View>
          <View style={styles.botdivider} />
          <View style={styles.boxes}>
            {/* ROW 2 - Left box*/}
            <View style={styles.leftbox}>
              {switchIsEnabled ? (
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                  <Image source={sweflag} style={styles.image} />
                  <Text>SEK</Text>
                </View>
              ) : (
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                  <Image
                    style={styles.image}
                    source={{ uri: route.params.logoURL }}
                  />
                  <Text>{route.params.name}</Text>
                </View>
              )}
            </View>
            {/*ROW 2 - Right box*/}
            <View style={styles.rightbox}>
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
        {/* ROW 2 - CODE END */}
      </View>
    </ScrollView>

    //TODO, lägg in info om coin nedanför.
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
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
    height: 55,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 3,
  },
  rightbox: {
    padding: 4,
    width: 220,
    height: 55,
    backgroundColor: "lightgrey",
    flexDirection: "column",
    justifyContent: "center",
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
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: 25,
  },
  image: {
    width: 30,
    height: 30,
    margin: 5,
  },
  convertxt: {
    paddingLeft: 160,
    paddingBottom: 10,
  },
});

export default ConvertScreen;
