import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import Card from "./Card";
import Icon from "./Icon";
import AppText from "./AppText";

function Sale() {
  const data = [
    {
      image: require("../assets/slider/1.jpeg"),
      title: "Pallet",
      fastDelivery: true,
      price: 100,
      off: 20,
      key: 1,
    },
    {
      image: require("../assets/slider/2.jpg"),
      title: "Seasoning",
      fastDelivery: false,
      price: 25,
      off: 15,
      key: 2,
    },
    {
      image: require("../assets/slider/3.jpeg"),
      title: "Pallet",
      fastDelivery: true,
      price: 129,
      off: 25,
      key: 3,
    },
    {
      image: require("../assets/slider/4.jpeg"),
      title: "Meds",
      fastDelivery: true,
      price: 55,
      off: 30,
      key: 4,
    },
    {
      image: require("../assets/slider/5.jpeg"),
      title: "Camera",
      fastDelivery: false,
      price: 250,
      off: 35,
      key: 5,
    },
    {
      image: require("../assets/slider/6.jpeg"),
      title: "Camera",
      fastDelivery: true,
      price: 350,
      off: 15,
      key: 6,
    },
    {
      image: require("../assets/slider/7.jpeg"),
      title: "Lotion",
      fastDelivery: true,
      price: 69,
      off: 40,
      key: 7,
    },
  ];

  const listHeader = () => (
    <View style={styles.header}>
      <AppText style={styles.offer} numberOfLines={3}>
        Today's Special Offer
      </AppText>
      <Icon
        name="dropbox"
        backgroundColor={colors.primary}
        iconColor={"khaki"}
        size={100}
        iconSize={100}
        hasText={false}
      />
      <View style={styles.seeAll}>
        <AppText style={{ color: colors.white }}>See All</AppText>
        <Icon
          style={{ marginTop: 0 }}
          name="chevron-small-right"
          hasText={false}
          size={30}
          iconSize={30}
          backgroundColor={colors.primary}
          iconColor={colors.white}
        />
      </View>
    </View>
  );

  const listFooter = () => (
    <View style={styles.footer}>
      <Icon
        style={{ marginTop: 0, marginBottom: 20 }}
        name="arrow-with-circle-right"
        hasText={false}
        size={60}
        iconSize={60}
        backgroundColor={colors.white}
        iconColor={colors.primary}
      />
      <AppText
        style={{ color: colors.primary, fontSize: 22, fontWeight: "bold" }}
      >
        See All
      </AppText>
    </View>
  );

  return (
    <View
      style={{
        backgroundColor: colors.primary,
        width: "100%",
        flexDirection: "row",
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            fastDelivery={item.fastDelivery}
            price={item.price}
            off={item.off}
          />
        )}
        ListHeaderComponent={listHeader}
        ListFooterComponent={listFooter}
        numColumns={1}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

export default Sale;

const styles = StyleSheet.create({
  footer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    height: 280,
    backgroundColor: colors.white,
    padding: 10,
    marginVertical: 20,
    marginLeft: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    height: 280,
    top: 25,
  },
  offer: {
    color: colors.white,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  seeAll: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});
