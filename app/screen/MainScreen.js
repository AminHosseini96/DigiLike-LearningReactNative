import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import Slider from "../components/Slider";
import SearchBar from "../components/SearchBar";
import IconHolder from "../components/IconHolder";
import TabBar from "../components/TabBar";
import Card from "../components/Card";
import Sale from "../components/Sale";

function MainScreen() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <ScrollView contentContainerStyle={styles.body}>
        <Slider />
        <IconHolder />
        <Sale />
      </ScrollView>
      <TabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    justifyContent: "flex-start",
    backgroundColor: colors.white,
    maxHeight: 1500,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: colors.white,
  },
});

export default MainScreen;
