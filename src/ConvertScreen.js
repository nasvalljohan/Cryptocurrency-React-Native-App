import React, { useState } from "react";
import sweflag from "../assets/sweflag.png";
import updown from "../assets/lottie/updown.json";
import downup from "../assets/lottie/downup.json";
import LottieView from "lottie-react-native";
import AndroidHeaderConvertScreen from "./AndroidHeaderConvertScreen";
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
  const animationdown = React.useRef(null);
  const firstRun = React.useRef(true);
  const animationup = React.useRef(null);

  React.useEffect(() => {
    if (firstRun.current) {
      if (!switchIsEnabled) {
        animationdown.current.play(0, 0);
        animationup.current.play(18, 18);
      } else {
        animationdown.current.play(18, 18);
        animationup.current.play(0, 0);
      }
      firstRun.current = false;
    } else if (switchIsEnabled) {
      animationup.current.play(18, 0);
      animationdown.current.play(0, 18);
    } else {
      animationup.current.play(0, 18);
      animationdown.current.play(18, 0);
    }
  }, [switchIsEnabled]);

  return (
    <ScrollView keyboardShouldPersistTaps="always" scrollEnabled={false}>
      {Platform.OS === "android" ? <AndroidHeaderConvertScreen /> : null}
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
                  <Text style={{ flex: 1, flexWrap: "wrap" }}>
                    {route.params.name}
                  </Text>
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: 36,
                height: 40,
                marginBottom: 15,
              }}
            >
              <LottieView
                ref={animationdown}
                style={{
                  width: 20,
                  height: 40,
                  marginHorizontal: -2,
                }}
                source={updown}
                autoPlay={false}
                loop={false}
                speed={3}
              />
              <LottieView
                ref={animationup}
                style={{
                  width: 20,
                  height: 40,
                  marginHorizontal: -2,
                }}
                source={downup}
                autoPlay={false}
                loop={false}
                speed={3}
              />
            </View>
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
                  <Text style={{ flex: 1, flexWrap: "wrap" }}>
                    {route.params.name}
                  </Text>
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
    backgroundColor: "#ebebeb",
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
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
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
  androidHeader: {
    alignItems: "center",
    height: 70,
    borderWidth: 0.2,
    backgroundColor: "white",
    borderBottomColor: "#fce0de",
  },
  bigtitle: {
    marginTop: 30,
    flex: 1,
    fontSize: 24,
    fontWeight: "700",
  },
});

export default ConvertScreen;
