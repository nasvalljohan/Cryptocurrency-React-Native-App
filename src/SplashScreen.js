import React from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import LottieView from "lottie-react-native";
import Splash from "../assets/lottie/Splash.json";

const HomeScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("CRYPTX COINS")}
    >
      <LottieView
        style={{ marginBottom: 20 }}
        source={Splash}
        autoPlay={true}
        loop={false}
        onAnimationFinish={() => navigation.navigate("CRYPTX COINS")}
        speed={0.7}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
