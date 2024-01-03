import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function Separator({ style }) {
  return (
    <View style={style}>
      {/* <View style={[styles.seprator, { backgroundColor: colors.midLight }]} /> */}
      <View style={[styles.seprator, { backgroundColor: colors.light }]} />
      <View style={[styles.seprator, { backgroundColor: colors.light }]} />
    </View>
  );
}

export default Separator;

const styles = StyleSheet.create({
  seprator: {
    width: "100%",
    height: 1,
  },
});
