import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  Button,
} from "react-native";
import Modal from "react-native-modal";

const ModalBox = ({
  name,
  symbol,
  currentPrice,
  priceChangePercentage,
  logoURL,
  modalShow,
  setModalShow,
}) => {
  const [switchIsEnabled, setSwitchIsEnabled] = useState(true);
  const [input, setInput] = useState();
  const hideModal = () => {
    setModalShow((previousState) => !previousState);
  };
  const currencyChange = () => {
    setSwitchIsEnabled((previousState) => !previousState);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Modal isVisible={modalShow} animationIn={"slideInUp"}>
        <View style={styles.modalbox}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={switchIsEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={currencyChange}
            value={switchIsEnabled}
          />
          {switchIsEnabled ? (
            <Text>Convert from SEK to {name}</Text>
          ) : (
            <Text>Convert from {name} to SEK</Text>
          )}
          <TextInput
            placeholder="Enter amount"
            keyboardType="numeric"
            onChangeText={setInput}
            //TODO value
          />

          {switchIsEnabled ? (
            <Text>
              {input / currentPrice} {symbol.toUpperCase()}
            </Text>
          ) : (
            <Text>{input * currentPrice} SEK </Text>
          )}
          <Text onPress={hideModal}>CLOSE</Text>
        </View>
      </Modal>
    </View>

    // TODO TouchableWithoutFeedback wrappa och använd för att stänga
  );
};

const styles = StyleSheet.create({
  modalbox: {
    height: "60%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default ModalBox;
