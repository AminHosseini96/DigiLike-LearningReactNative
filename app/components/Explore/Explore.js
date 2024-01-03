import React from "react";
import {
  Dimensions,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import colors from "../../config/colors";
import MasonryList from "@react-native-seoul/masonry-list";
import AppText from "../AppText";

const { width, height } = Dimensions.get("window");

function Explore() {
  const components = [];
  for (let i = 0; i < 45; i++) {
    const viewComponent = (
      <View
        key={i}
        style={
          (i - 1) % 12 == 0 || (i - 9) % 12 == 0 ? styles.tomp : styles.comp
        }
      >
        <AppText style={{ color: colors.white }}>{i}</AppText>
      </View>
    );
    components.push(viewComponent);
  }
  return (
    // <FlatList
    //   data={components}
    //   renderItem={({ item }) => item}
    //   keyExtractor={(item) => components.indexOf(item)}
    //   numColumns={2}
    // />
    <MasonryList
      style={styles.container}
      data={components}
      renderItem={({ item }) => item}
      keyExtractor={(item) => components.indexOf(item)}
      numColumns={3}
    />
  );
}

//   return (
//     // <ScrollView contentContainerStyle={styles.container}>
//     //   {components}
//     // </ScrollView>
//   );
// }

export default Explore;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignContent: "center",
    flexWrap: "wrap",
    top: StatusBar.currentHeight,
    height: 3000,
    paddingTop: 2,
  },
  comp: {
    width: width * 0.32,
    height: width * 0.32,
    margin: 2,
    backgroundColor: colors.crimson,
    justifyContent: "center",
    alignItems: "center",
  },
  tomp: {
    width: width * 0.64 + 4,
    height: width * 0.64 + 4,
    margin: 2,
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
});
