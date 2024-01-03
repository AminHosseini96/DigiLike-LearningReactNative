import React from "react";
import { StyleSheet, View } from "react-native";

import Separator from "./Separator";
import Icon from "./Icon";
import AppText from "./AppText";
import VerticalSeparator from "./VerticalSeparator";
import ProductShipment from "./ProductShipment";
import colors from "../config/colors";

function ProductSeller() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText style={{ fontSize: 22 }}>Seller</AppText>
        <AppText
          style={{
            fontSize: 22,
            color: colors.medium,
            marginLeft: "auto",
          }}
        >
          5 more seller
        </AppText>
      </View>
      <View style={styles.section}>
        <Icon name="shop" size={30} iconSize={30} hasText={false} />
        <View>
          <AppText style={{ marginLeft: 10, marginBottom: 10 }}>
            Apple Store
          </AppText>
          <View style={styles.section}>
            <AppText style={{ marginLeft: 10, color: "darkgoldenrod" }}>
              88%
            </AppText>
            <AppText style={{ marginLeft: 5 }}>satisfaction</AppText>
            <VerticalSeparator />
            <AppText style={{ color: "green", marginLeft: 5 }}>Good</AppText>
            <AppText style={{ marginLeft: 5 }}>services</AppText>
          </View>
        </View>
        <Icon
          style={{ marginLeft: "auto" }}
          name="chevron-small-right"
          size={30}
          iconSize={30}
          hasText={false}
        />
      </View>
      <Separator style={{ marginLeft: "10%", marginVertical: 10 }} />
      <View style={styles.section}>
        <Icon name="shield" size={30} iconSize={30} hasText={false} />
        <AppText style={{ marginLeft: 10 }}>12 month guarantee</AppText>
      </View>
      <Separator style={{ marginLeft: "10%", marginVertical: 10 }} />
      <View style={styles.shipment}>
        <View style={styles.section}>
          <Icon
            name="shopping-bag"
            iconColor={colors.medium}
            size={30}
            iconSize={30}
            hasText={false}
          />
          <AppText style={{ marginLeft: 10 }}>Available in Storage</AppText>
        </View>
        <View>
          <ProductShipment name="Seller" shipmentMethod={"users"} />
          <ProductShipment name="Digilike" shipmentMethod={"evernote"} />
          <ProductShipment name="" shipmentMethod={"rocket"} />
        </View>
      </View>
      <Separator style={{ marginVertical: 10 }} />
      <View style={styles.section}>
        <Icon
          name="flickr-with-circle"
          iconColor="gold"
          size={30}
          iconSize={30}
          hasText={false}
        />
        <AppText style={{ marginLeft: 10 }}>Earn 150 points</AppText>
      </View>
      <Separator style={{ marginVertical: 10 }} />
      <View style={styles.section}>
        <Icon
          name="leaf"
          iconColor="green"
          size={30}
          iconSize={30}
          hasText={false}
        />
        <AppText style={{ marginLeft: 10 }}>Best price in the area</AppText>
      </View>
      <View style={[styles.section, { alignSelf: "flex-end" }]}>
        <AppText style={{ marginRight: 10, marginTop: 5 }}>
          Any lower prices?
        </AppText>
        <Icon
          name="ticket"
          iconColor={colors.midmed}
          size={25}
          iconSize={25}
          hasText={false}
        />
      </View>
    </View>
  );
}

export default ProductSeller;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    marginBottom: 15,
  },
  section: {
    flexDirection: "row",
    backgroundColor: colors.white,
    alignItems: "center",
  },
  shipment: {
    marginBottom: 10,
  },
});
