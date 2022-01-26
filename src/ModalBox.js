import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

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

  const currencyChange = () => {
    setSwitchIsEnabled((previousState) => !previousState);
  };

  return (
    <View>
      <Modal
        visible={modalShow}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setModalShow(!modalShow);
          console.log("android is backpedaling /GKICK!!");
        }}
      >
        <TouchableOpacity
          style={styles.container}
          onPressOut={() => setModalShow(!modalShow)}
        >
          <ScrollView
            keyboardShouldPersistTaps="always"
            onScroll={() => setModalShow(!modalShow)}
          >
            <TouchableWithoutFeedback>
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
                />

                {switchIsEnabled ? (
                  <Text>
                    {input / currentPrice} {symbol.toUpperCase()}
                  </Text>
                ) : (
                  <Text>{input * currentPrice} SEK </Text>
                )}
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </TouchableOpacity>
      </Modal>
    </View>

    // TODO Fäst den i botten av skärmen, samt flytta med keyboardavoiding??
    // TODO Modal väldigt liten, måste göras större.
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalbox: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    backgroundColor: "grey",
  },
});

export default ModalBox;
