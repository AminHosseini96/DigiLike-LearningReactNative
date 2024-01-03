import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";

function Icon({
  name,
  style,
  size = 40,
  borderRadius = size / 5,
  iconSize = size / 2,
  backgroundColor = colors.white,
  iconColor = colors.medium,
  fontColor = colors.primary,
  hasText = true,
  text,
  fontSize = 16,
}) {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: borderRadius,
          backgroundColor,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      <Entypo name={name} color={iconColor} size={iconSize} />
      {hasText ? (
        <AppText style={{ fontSize: fontSize, color: fontColor, padding: 3 }}>
          {text}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Icon;
