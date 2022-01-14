import { StyleSheet, Text, View } from "react-native";
import Boxes from "./Boxes";
import { SAMPLE_DATA } from "./APIDATA";

const CoinListScreen = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bigbox}>
        <Text style={styles.bigtitle}>Select coin to convert</Text>
      </View>

      <Boxes
        name={SAMPLE_DATA[0].name}
        symbol={SAMPLE_DATA[0].symbol}
        currentPrice={SAMPLE_DATA[0].current_price}
        priceChangePercentage={SAMPLE_DATA[0].price_change_24h}
        logoURL={SAMPLE_DATA[0].image}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bigtitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  bigbox: {
    paddingHorizontal: 16,
    alignSelf: "center",
  },
});

export default CoinListScreen;
