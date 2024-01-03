import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../config/colors";
import Separator from "./Separator";

function SearchBar() {
  const [text, onChangeText] = React.useState("");

  return (
    <View>
      <View style={styles.container}>
        <Entypo name="magnifying-glass" size={30} color={colors.medium} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Search"
          placeholderTextColor={colors.medium}
        />
      </View>
      <Separator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 10,
    paddingHorizontal: 5,
    marginHorizontal: 10,
    marginBottom: 7.5,
  },
  input: {
    fontSize: 20,
    flex: 1,
    paddingVertical: 10,
    paddingRight: 10,
    paddingLeft: 5,
    color: colors.dark,
  },
});

export default SearchBar;
