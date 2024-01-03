import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";

import Icon from "./Icon";
import Separator from "./Separator";
import colors from "../config/colors";
import TabBarIcon from "./TabBarIcon";

function TabBar() {
  return (
    <View>
      <Separator />
      <View style={styles.container}>
        <TabBarIcon name="user" text="User" />
        <TabBarIcon name="google-play" text="Magnet" />
        <TabBarIcon name="shopping-cart" text="Cart" />
        <TabBarIcon name="grid" text="Category" />
        <TabBarIcon name="home" text="Home" />
      </View>
    </View>
  );
}

export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingHorizontal: 10,
    marginTop: 12.5,
    marginBottom: 7.5,
  },
});
