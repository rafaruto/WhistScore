import React, { Component, useState } from "react";
import reactDom from "react-dom";
import {
  Modal,
  Text,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const History = (props) => {
  const players = props.players;
  const history = props.history;

  const cellStyle = players.length == 5 ? styles.scoreItem5 : styles.scoreItem;
  const nameItems = players.map((player) => (
    <View style={[cellStyle, styles.cell]} key={player.id}>
      <Text style={styles.headerCell}> {player.name}</Text>
    </View>
  ));

  const header = players.map((player) => (
    <View
      style={[
        cellStyle,
        styles.cell,
        styles.rowContainer,
        { backgroundColor: "#ebf6f9" },
      ]}
      key={player.id}
    >
      <View style={styles.width50}>
        <Icon
          style={[styles.header]}
          name="plus-minus"
          size={10}
          color="#468FAF"
        />
      </View>
      <View style={styles.width50}>
        <Icon style={[styles.header]} name="sigma" size={10} color="#468FAF" />
      </View>
    </View>
  ));

  const ScoreItem = ({ score }) => {
    let plusScore;

    if (score[0] == 0) {
      plusScore = (
        <Icon
          style={[styles.width50, styles.deadIcon]}
          name="emoticon-dead-outline"
          size={12}
          color="#468FAF"
        />
      );
    } else {
      plusScore = (
        <Text
          style={[
            styles.width50,
            styles.plus,
            score[0] < 0 ? styles.red : styles.green,
          ]}
        >
          {score[0]}
        </Text>
      );
    }

    return (
      <View style={[cellStyle, styles.rowContainer, styles.cell]}>
        {plusScore}
        <Text
          style={[
            styles.width50,
            styles.total,
            styles.plus,
            score[1] < 0 ? styles.red : styles.green,
          ]}
        >
          {score[1]}
        </Text>
      </View>
    );
  };

  function ScoreCells(props) {
    const listItems = props.score.map((score) => (
      <ScoreItem score={score}></ScoreItem>
    ));
    return listItems;
  }

  const scoreItems = history.map((history, index) => (
    <View
      style={[
        styles.rowContainer,
        { backgroundColor: "#A9D6E5" },
        index % 2 && { backgroundColor: "#ebf6f9" },
        ,
      ]}
    >
      <View style={[styles.scoreItem, styles.rowContainer, styles.cell]}>
        <Text style={styles.plus}> {history.contract}</Text>
      </View>

      <ScoreCells score={history.score}></ScoreCells>
    </View>
  ));

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.toggle}
      onRequestClose={() => {
        {
          props.toggleFunction(false);
        }
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.rowContainer}>
            <Text style={styles.title}>Historique des parties</Text>
            <Pressable
              style={styles.buttonClose}
              onPress={() => {
                props.toggleFunction(false);
              }}
            >
              <Icon name="close-circle-outline" size={30} />
            </Pressable>
          </View>

          <View style={styles.rowContainer}>
            <View style={[styles.scoreItem]}>
              <Text style={styles.nbGameCell}>{history.length}</Text>
            </View>
            {nameItems}
          </View>
          <View style={styles.rowContainer}>
            <View style={[styles.scoreItem]}>
              <Text style={styles.nbGameCell}></Text>
            </View>
            {header}
          </View>

          <ScrollView style={styles.scrollView}>
            <View style={[styles.box]}>{scoreItems}</View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    marginBottom: 22,
    marginLeft: 3,
    marginRight: 3,
  },
  modalView: {
    margin: 1,
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: "white",
  },
  rowContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center", // if you want to fill rows left to right
  },
  scoreItem: {
    width: "20%", // is 25% of container width
  },
  scoreItem5: {
    width: "16%", // is 20% of container width
  },
  width50: {
    width: "50%", // is 25% of container width
  },

  cell: {
    borderLeftWidth: 1,
    borderLeftColor: "white",
  },
  plus: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 2,
    marginBottom: 2,
  },
  deadIcon: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 4,
    marginBottom: 2,
  },
  header: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 2,
  },
  total: {
    fontSize: 13,
    textAlign: "center",
  },
  headerCell: {
    fontSize: 13,
    textAlign: "center",
    backgroundColor: "#013A63",
    color: "white",
    paddingTop: 2,
    paddingBottom: 2,
  },

  nbGameCell: {
    fontSize: 13,
    textAlign: "center",
    color: "#013A63",
    paddingTop: 2,
    paddingBottom: 2,
  },
  title: {
    fontSize: 24,
    margin: 15,
  },
  buttonClose: {
    marginTop: 15,
    marginLeft: 15,
  },
  box: {
    borderColor: "#013A63",
    borderWidth: 1,
  },
  green: {
    color: "#517b64",
  },
  red: {
    color: "#ff595e",
  },
});

export default History;
