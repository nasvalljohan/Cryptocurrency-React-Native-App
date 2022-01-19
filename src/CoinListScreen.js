import { FlatList, StyleSheet, Text, View } from "react-native";
import Boxes from "./Boxes";
import { SAMPLE_DATA } from "./APIDATA";

const CoinListScreen = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={SAMPLE_DATA}
        renderItem={({ item }) => (
          <Boxes
            name={item.name}
            symbol={item.symbol}
            currentPrice={item.current_price}
            priceChangePercentage={item.price_change_percentage_24h}
            logoURL={item.image}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default CoinListScreen;
