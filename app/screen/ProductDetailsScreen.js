import React from "react";
import { StyleSheet, View, StatusBar, ScrollView } from "react-native";

import Icon from "../components/Icon";
import colors from "../config/colors";
import ProductImagesSlider from "../components/ProductImagesSlider";
import ProductDescription from "../components/ProductDescription";
import AppText from "../components/AppText";
import Separator from "../components/Separator";
import ProductSeller from "../components/ProductSeller";

const iphone = [
  { color: "black", name: "Black", key: "1" },
  { color: "blanchedalmond", name: "Almond", key: "2" },
  { color: "darkred", name: "Dark Red", key: "3" },
  { color: "pink", name: "Pink", key: "4" },
  { color: "midnightblue", name: "Midnight Blue", key: "5" },
];

function ProductDetailsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon
          style={{ marginHorizontal: 5 }}
          name="dots-three-vertical"
          size={30}
          iconSize={25}
          hasText={false}
        />
        <Icon
          style={{ marginHorizontal: 5 }}
          name="heart-outlined"
          size={30}
          iconSize={30}
          hasText={false}
        />
        <Icon
          style={{ marginHorizontal: 5 }}
          name="shopping-cart"
          size={30}
          iconSize={30}
          hasText={false}
        />
        <Icon
          style={{ marginLeft: "auto", marginRight: 5 }}
          name="cross"
          size={30}
          iconSize={30}
          hasText={false}
        />
      </View>
      <View style={{ backgroundColor: colors.white }}>
        <ProductImagesSlider />
        <ProductDescription product={iphone} />
        <Separator style={{ backgroundColor: colors.light, height: 10 }} />
        <View style={styles.seller}>
          <ProductSeller />
        </View>
      </View>
    </ScrollView>
  );
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  body: {
    justifyContent: "flex-start",
    backgroundColor: colors.white,
    // maxHeight: 1500,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: colors.light,
  },
  header: {
    paddingLeft: 5,
    paddingRight: 10,
    backgroundColor: colors.white,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  seller: {},
});
