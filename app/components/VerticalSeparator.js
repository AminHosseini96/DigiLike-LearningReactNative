import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function VerticalSeparator({ style }) {
  return (
    <View style={style}>
      <View style={[styles.seprator, { backgroundColor: colors.light }]} />
    </View>
  );
}

export default VerticalSeparator;

const styles = StyleSheet.create({
  seprator: {
    width: 2,
    height: 25,
    marginHorizontal: 10,
  },
});
