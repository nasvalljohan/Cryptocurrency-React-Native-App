import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import LottieView from "lottie-react-native";
import Splash from "../assets/lottie/Splash.json";

const HomeScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("CRYPTX COINS")}
    >
      <LottieView
        source={Splash}
        autoPlay={true}
        loop={false}
        onAnimationFinish={() => navigation.navigate("CRYPTX COINS")}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default HomeScreen;
