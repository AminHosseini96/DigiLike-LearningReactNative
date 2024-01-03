import React, { useRef } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  Dimensions,
  Animated,
} from "react-native";

import colors from "../config/colors";
import Icon from "./Icon";
import AppText from "./AppText";
import PaginationDots from "./PaginationDots";

const { width, height } = Dimensions.get("window");
const BORDER_RADIUS = 15;

const listFooter = () => (
  <View style={styles.footer}>
    <View style={styles.border}>
      <Icon
        style={{ marginBottom: 20 }}
        name="images"
        hasText={false}
        size={60}
        iconSize={60}
        backgroundColor={colors.white}
        iconColor={colors.medium}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AppText
          style={{ color: colors.medium, fontSize: 22, fontWeight: "bold" }}
        >
          More Photos
        </AppText>
        <Icon
          name="chevron-small-right"
          hasText={false}
          size={35}
          iconSize={35}
          backgroundColor={colors.white}
          iconColor={colors.medium}
        />
      </View>
    </View>
  </View>
);

function ProductImagesSlider() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const dotPosition = Animated.divide(scrollX, width);

  const data = [
    { image: require("../assets/product/1.jpg"), key: 1 },
    { image: require("../assets/product/2.jpg"), key: 2 },
    { image: require("../assets/product/3.jpg"), key: 3 },
    { image: require("../assets/product/4.jpg"), key: 4 },
    { image: require("../assets/product/5.jpg"), key: 5 },
    { image: require("../assets/product/6.jpg"), key: 6 },
    { image: require("../assets/product/7.jpg"), key: 7 },
    { image: require("../assets/product/8.jpg"), key: 8 },
    { image: require("../assets/product/9.jpg"), key: 9 },
  ];

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item }) => {
          return (
            <View>
              <View style={styles.itemContent}>
                <Image source={item.image} style={styles.image} />
              </View>
            </View>
          );
        }}
        ListFooterComponent={listFooter}
        // pagingEnabled={true}
        numColumns={1}
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
      />
      <View style={styles.dots}>
        <PaginationDots data={data} dotPosition={dotPosition} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    width: "85%",
    backgroundColor: colors.white,
    borderColor: colors.light,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 20,
  },
  container: {
    justifyContent: "center",
    alignContent: "center",
  },
  dots: {
    position: "relative",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingBottom: 10,
  },
  footer: {
    backgroundColor: colors.white,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: width,
    height: 250,
    // maxHeight: 220,
    // // backgroundColor: colors.white,
    // padding: 10,
    // marginVertical: 20,
    // marginLeft: 10,
    // borderRadius: 10,
    // marginRight: 10,
  },
  image: {
    width: width - 30,
    aspectRatio: 1,
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

export default ProductImagesSlider;
