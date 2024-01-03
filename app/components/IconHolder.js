import React from "react";
import { View, StyleSheet } from "react-native";

import Icon from "./Icon";
import colors from "../config/colors";

function IconHolder() {
  return (
    <View style={styles.icons}>
      <Icon
        style={{ marginTop: 5, borderWidth: 1, borderColor: colors.medium }}
        name="baidu"
        iconColor="brown"
        backgroundColor={colors.light}
        hasText
        text="Pet Shop"
        fontColor={colors.dark}
        size={90}
        iconSize={35}
      />
      <Icon
        style={{ marginTop: 7.5, borderWidth: 1, borderColor: colors.medium }}
        name="500px"
        iconColor="orange"
        backgroundColor={colors.light}
        hasText
        text="Infinity"
        fontColor={colors.dark}
        size={90}
        iconSize={35}
      />
      <Icon
        style={{ marginTop: 7.5, borderWidth: 1, borderColor: colors.medium }}
        name="address"
        iconColor="darkblue"
        backgroundColor={colors.light}
        hasText
        text="Routes"
        fontColor={colors.dark}
        size={90}
        iconSize={35}
      />
      <Icon
        style={{ marginTop: 7.5, borderWidth: 1, borderColor: colors.medium }}
        name="line-graph"
        iconColor="salmon"
        backgroundColor={colors.light}
        hasText
        text="Stocks"
        fontColor={colors.dark}
        size={90}
        iconSize={35}
      />
      <Icon
        style={{ marginTop: 7.5, borderWidth: 1, borderColor: colors.medium }}
        name="awareness-ribbon"
        iconColor="forestgreen"
        backgroundColor={colors.light}
        hasText
        text="Awareness"
        fontColor={colors.dark}
        size={90}
        iconSize={35}
      />
      <Icon
        style={{ marginTop: 7.5, borderWidth: 1, borderColor: colors.medium }}
        name="dribbble"
        iconColor="darkgoldenrod"
        backgroundColor={colors.light}
        hasText
        text="Sports"
        fontColor={colors.dark}
        size={90}
        iconSize={35}
      />
      <Icon
        style={{ marginTop: 7.5, borderWidth: 1, borderColor: colors.medium }}
        name="github"
        iconColor="#333"
        backgroundColor={colors.light}
        hasText
        text="Github"
        fontColor={colors.dark}
        size={90}
        iconSize={35}
      />
      <Icon
        style={{ marginTop: 7.5, borderWidth: 1, borderColor: colors.medium }}
        name="paypal"
        iconColor="#3b7bbf"
        backgroundColor={colors.light}
        hasText
        text="Paypal"
        fontColor={colors.dark}
        size={90}
        iconSize={35}
      />
    </View>
  );
}

export default IconHolder;
7;
const styles = StyleSheet.create({
  icons: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
