import React from "react";
import { View, Animated } from "react-native";

function PaginationDots({ data, dotPosition }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {data.map((_, index) => {
        const opacity = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={`dot-${index}`}
            style={{
              borderRadius: 5,
              marginHorizontal: 5,
              height: 10,
              width: 10,
              opacity,
              backgroundColor: "#333",
            }}
          />
        );
      })}
    </View>
  );
}

export default PaginationDots;
