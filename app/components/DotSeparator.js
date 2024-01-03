import React from "react";
import { View } from "react-native";
import colors from "../config/colors";

function DotSeparator({ size, style }) {
  return (
    <View style={{}}>
      <View
        style={[
          {
            backgroundColor: colors.midLight,
            width: size,
            height: size,
            borderRadius: size * 0.5,
            marginRight: 7.5,
          },
          style,
        ]}
      ></View>
    </View>
  );
}

export default DotSeparator;
