import { FlatList, StyleSheet, Text, View } from "react-native";
import Boxes from "./Boxes";
import { useEffect, useState } from "react";

const CoinListScreen = ({ navigate }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=SEK&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C1h"
    )
      .then((response) => response.json())
      .then((apiFetch) => setData(apiFetch), console.log("API Fetched"))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
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
