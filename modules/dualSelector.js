import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";

const DualSelector = (props) => {
  return (
    <View style={[styles.rowContainer]}>
      <Pressable
        style={[
          styles.dualButton,
          styles.dualButtonLeft,
          styles.playerButton,
          props.selectedValue == true ? styles.winSelected : styles.notSelected,
        ]}
        onPress={() => {
          props.setSelectedValue(true);
        }}
      >
        <Text
          style={[
            props.selectedValue == true
              ? styles.winSelected
              : styles.notSelected,
          ]}
        >
          {props.textTrue}
        </Text>
      </Pressable>

      <Pressable
        style={[
          styles.dualButton,
          styles.dualButtonRight,
          styles.playerButton,
          props.selectedValue == false
            ? styles.looseSelected
            : styles.notSelected,
        ]}
        onPress={() => {
          props.setSelectedValue(false);
        }}
      >
        <Text
          style={[
            props.selectedValue == false
              ? styles.looseSelected
              : styles.notSelected,
          ]}
        >
          {props.textFalse}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center", // if you want to fill rows left to right
  },
  dualButton: {
    padding: 5,
    elevation: 2,
    borderWidth: 0.5,
    marginBottom: 15,
    marginTop: 15,
  },
  dualButtonLeft: {
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    borderRightWidth: 0,
    marginLeft: 10,
  },
  dualButtonRight: {
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  winSelected: {
    backgroundColor: "#a4c3b2",
    color: "white",
  },
  looseSelected: {
    backgroundColor: "#ff595e",
    color: "white",
  },
  rowContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
  },
  notSelected: {
    backgroundColor: "white",
  },
});

export default DualSelector;
