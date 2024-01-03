import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";

function TabBarIcon({ name, text }) {
  return (
    <View
      style={{
        width: "20%",
        height: 40,
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Entypo name={name} color={colors.medium} size={30} />
      <AppText style={{ fontSize: 16, color: colors.medium, padding: 3 }}>
        {text}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default TabBarIcon;
