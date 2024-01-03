import React from "react";
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import Separator from "./Separator";
import DotSeparator from "./DotSeparator";
import AppText from "./AppText";
import Icon from "./Icon";
import colors from "../config/colors";

const { width, height } = Dimensions.get("window");

function ProductDescription({ product }) {
  return (
    <View style={styles.container}>
      <View style={styles.path}>
        <AppText style={{ color: colors.medium }}>Phone</AppText>
        <AppText style={{ color: colors.medium, paddingHorizontal: 7.5 }}>
          \
        </AppText>
        <AppText style={{ color: colors.medium }}>Apple</AppText>
      </View>
      <AppText style={styles.title}>iPhone 14 - 128 GB</AppText>
      <View style={styles.customerReview}>
        <View style={styles.ratings}>
          <Icon
            style={{ marginRight: 5 }}
            name="star"
            iconColor="gold"
            hasText={false}
            size={15}
            iconSize={15}
          />
          <AppText style={{ marginRight: 5 }}>4.4</AppText>
          <AppText style={{ color: colors.midLight }}>(1905)</AppText>
        </View>
        <DotSeparator size={7.5} />
        <AppText style={{ color: colors.medium, marginRight: 7.5 }}>
          234 Comments
        </AppText>
        <DotSeparator size={7.5} />
        <AppText style={{ color: colors.medium }}>16 Q&As</AppText>
      </View>
      <View style={styles.recomended}>
        <Icon
          style={{ marginRight: 5 }}
          hasText={false}
          name="thumbs-up"
          iconColor="green"
          size={15}
          iconSize={15}
        />
        <AppText>Recommended by 90% of the users</AppText>
      </View>
      {product.length > 0 && (
        <View>
          <Separator />
          <AppText style={{ marginVertical: 5, fontSize: 22 }}>Color</AppText>
          {/* <ScrollView horizontal={true} style={styles.colorsSection}>
            {product.map((item, index) => {
              return (
                
              );
            })}
          </ScrollView> */}
          <FlatList
            style={styles.colorsSection}
            data={product}
            renderItem={({ item }) => (
              <View style={styles.colorBox}>
                <View
                  style={{
                    backgroundColor: item.color,
                    width: 25,
                    height: 25,
                    borderRadius: 20,
                    marginRight: 5,
                    borderColor: colors.midLight,
                    borderWidth: 1,
                  }}
                />
                <AppText style={{ maxHeight: 30 }}>{item.name}</AppText>
              </View>
            )}
            keyExtractor={(item) => item.key}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled
          />
        </View>
      )}
    </View>
  );
}

export default ProductDescription;

const styles = StyleSheet.create({
  colorBox: {
    borderWidth: 1,
    borderColor: colors.midLight,
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 10,
    borderRadius: 20,
    padding: 5,
    paddingRight: 7.5,
    height: 35,
  },
  colorsSection: {
    maxHeight: 40,
  },
  container: {
    backgroundColor: colors.white,
    alignItems: "flex-start",
    padding: 15,
  },
  customerReview: {
    alignItems: "center",
    flexDirection: "row",
  },
  path: {
    flexDirection: "row",
  },
  ratings: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 7.5,
    marginTop: 7.5,
  },
  recomended: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7.5,
    marginBottom: 7.5,
  },
  title: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 5,
  },
});
