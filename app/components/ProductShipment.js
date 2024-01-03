import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";
import colors from "../config/colors";

function ProductShipment({ name = "", shipmentMethod }) {
  let deliveryColor;
  const deliveryName =
    shipmentMethod === "rocket"
      ? "Fast Delivery (Only in Tehran)"
      : "Delivery by " + { name };
  switch (shipmentMethod) {
    case "rocket":
      deliveryColor = "navy";
      break;
    case "users":
      deliveryColor = "coral";
      break;
    case "evernote":
      deliveryColor = colors.crimson;
      break;
    default:
      deliveryColor = colors.medium;
  }
  return (
    <View style={styles.container}>
      <View style={styles.bullet}>
        <View style={styles.line} />
        <View style={styles.dot} />
      </View>
      <View style={styles.delivery}>
        <Icon
          style={{ marginHorizontal: 10 }}
          name={shipmentMethod}
          size={20}
          iconSize={20}
          iconColor={deliveryColor}
          hasText={false}
        />
        <AppText style={{ color: colors.midmed, fontSize: 16 }}>
          {deliveryName}
        </AppText>
      </View>
    </View>
  );
}

export default ProductShipment;

const styles = StyleSheet.create({
  bullet: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    // backgroundColor: "yellow",
    flexDirection: "row",
    paddingVertical: 5,
    paddingLeft: 10,
    justifyContent: "flex-start",
  },
  delivery: {
    // justifyContent: "",
    backgroundColor: colors.white,
    flexDirection: "row",
  },
  dot: {
    width: 7.5,
    height: 7.5,
    borderRadius: 10,
    backgroundColor: colors.medium,
  },
  line: {
    width: 2,
    height: 15,
    backgroundColor: colors.midLight,
    paddingBottom: 5,
  },
});
