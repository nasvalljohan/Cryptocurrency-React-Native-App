import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Vill du känna dig trygg vid handel med cryptovaluta?</Text>
        <Text>
          asdfasdfa asfa sdf asdfasd fasfd asdfasdfasdf asdf asdf sdfa adsfasdf
        </Text>
        <Text>abcabcabc ad asfsadf asdfasdf asdfasfd asdfsadf asfdasdf</Text>
      </View>
      <Image
        source={{
          uri: "https://www.pngmart.com/files/17/Trade-PNG-File.png",
        }}
        style={styles.images}
      />
      <Button
        title="CoinScreen"
        onPress={() => navigation.navigate("CRYPTX COINS")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 24,
    justifyContent: "space-between",
    alignItems: "center",
  },
  box: {
    alignItems: "flex-start",
  },
  images: {
    width: 100,
    height: 100,
  },
});

export default HomeScreen;
