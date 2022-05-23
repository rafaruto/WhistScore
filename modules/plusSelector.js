import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";

const PlusSelector = (props) => {
  var ret = [];

  const sign = props.winning == true ? "+" : "-";
  const startIndex = props.winning == true ? "0" : "1";
  if (props.contract.pointsplus > 0) {
    for (let i = startIndex; i <= props.contract.maxplus; i++) {
      ret.push(
        <Pressable
          key={i}
          style={[
            styles.plus,
            props.selectedValue == i
              ? styles.playerSelected
              : styles.playerNotSelected,
          ]}
          onPress={() => {
            props.setSelectedValue(i);
          }}
        >
          <Text
            style={[
              props.selectedValue == i
                ? styles.playerSelected
                : styles.playerNotSelected,
            ]}
          >
            {sign}
            {i}
          </Text>
        </Pressable>
      );
    }

    return <View style={[styles.scoreContainer]}>{ret}</View>;
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  scoreContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center", // if you want to fill rows left to right
  },
  playerNotSelected: {
    backgroundColor: "white",
  },

  playerSelected: {
    backgroundColor: "#2A6F97",
    color: "white",
  },
  plus: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 7,
    margin: 2,
    fontSize: 24,
  },
});

export default PlusSelector;
