import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

const Eee = () => {
  const data = Array(20).fill("a"); // Example data array
  const columns = 3; // Number of columns in the grid
  console.log(data);
  const calculateFillers = (dataLength, columns) => {
    const totalItems = dataLength + Math.ceil(dataLength / columns) - 1;
    const fillersCount = totalItems % columns;
    return Array(fillersCount).fill();
  };

  const fillers = calculateFillers(data.length, columns);

  const renderItem = ({ item, index }) => {
    if (item === undefined) {
      // Render filler item
      console.log("un");
      return <View style={styles.fillerItem} />;
    }

    const itemStyles = [styles.item];

    if ((index + 1) % columns === 0) {
      itemStyles.push(styles.divisibleByThree);
      console.log("0");
    }

    return <View style={itemStyles} />;
  };

  return (
    <FlatList
      // style={{ backgroundColor: "red" }}
      data={data.concat(fillers)}
      keyExtractor={(_, index) => index.toString()}
      numColumns={columns}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    width: 100,
    height: 100,
    backgroundColor: "green",
    margin: 5,
  },
  divisibleByThree: {
    width: 200,
    height: 200,
    backgroundColor: "blue",
  },
  fillerItem: {
    // flex: 1,
    backgroundColor: "red",
    margin: 5,
  },
});

export default Eee;
