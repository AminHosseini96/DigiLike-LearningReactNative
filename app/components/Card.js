import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "./AppText";
import Icon from "./Icon";
import colors from "../config/colors";

function Card({ image, title, fastDelivery = true, price, off }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.special}>Special Offer</AppText>
      {image && (
        <Image resizeMode="contain" source={image} style={styles.image} />
      )}
      <AppText style={styles.title}>{title}</AppText>
      {fastDelivery ? (
        <View style={styles.delivery}>
          <Icon
            style={{ marginTop: 0, marginRight: 5 }}
            name="rocket"
            size={20}
            iconColor={colors.medium}
            iconSize={20}
            hasText={false}
          />
          <AppText style={styles.subTitle}>Fast Delivery</AppText>
        </View>
      ) : (
        <View style={styles.delivery}>
          <Icon
            style={{ marginTop: 0, marginRight: 5 }}
            name="box"
            size={20}
            iconColor="darkorange"
            iconSize={20}
            hasText={false}
          />
          <AppText style={styles.subTitle}>Fast Delivery</AppText>
        </View>
      )}
      <View style={styles.priceContainer}>
        <View style={styles.prices}>
          <AppText style={styles.offPrice}>
            ${((price * (100 - off)) / 100).toFixed(2)}
          </AppText>
          <AppText style={styles.price}>${price.toFixed(2)}</AppText>
        </View>
        <View style={styles.off}>
          <AppText style={{ color: colors.white, fontWeight: "bold" }}>
            %{off}
          </AppText>
        </View>
      </View>
      <AppText style={styles.time}>13 : 15 : 45</AppText>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    height: 280,
    backgroundColor: colors.white,
    padding: 10,
    marginVertical: 20,
    marginLeft: 10,
    borderRadius: 10,
  },
  delivery: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "95%",
  },
  off: {
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.crimson,
  },
  offPrice: {
    fontWeight: "bold",
  },
  price: {
    textDecorationLine: "line-through",
    color: colors.medium,
  },
  prices: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  special: {
    color: colors.crimson,
    fontSize: 16,
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
  },
  time: {
    alignSelf: "flex-start",
    color: colors.medium,
    fontSize: 16,
    marginLeft: "5%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
});
