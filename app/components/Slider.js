import React from "react";
import { FlatList, Image, StyleSheet, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const BORDER_RADIUS = 15;

function Slider() {
  const images = [
    { src: require("../assets/slider/1.jpeg"), key: 1 },
    { src: require("../assets/slider/2.jpg"), key: 2 },
    { src: require("../assets/slider/3.jpeg"), key: 3 },
    { src: require("../assets/slider/4.jpeg"), key: "4" },
    { src: require("../assets/slider/5.jpeg"), key: "5" },
    { src: require("../assets/slider/6.jpeg"), key: "6" },
    { src: require("../assets/slider/7.jpeg"), key: "7" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContent}>
              <Image source={item.src} style={styles.image} />
            </View>
          );
        }}
        pagingEnabled={true}
        numColumns={1}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
      />
      {/* <View
        style={{
          position: "absolute",
          left: 30,
          bottom: 30,
          backgroundColor: "rgba(0,0,0,0.6)",
          width: 90,
          height: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 15,
            backgroundColor: "white",
          }}
        ></View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
  },
  image: {
    width: width - 30,

    borderRadius: BORDER_RADIUS,
    resizeMode: "contain",
    maxHeight: 220,
  },
  itemContent: {
    width: width,
    justifyContent: "center",
    maxHeight: 250,
    alignItems: "center",
  },
});

export default Slider;
