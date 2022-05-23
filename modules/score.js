import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";

const Score = (props) => {
  const players = props.players;
  const cellStyle = players.length == 5 ? styles.scoreItem5 : styles.scoreItem;

  const listItems = players.map((player) => (
    <View style={cellStyle}>
      <Text style={styles.playerName}> {player.name}</Text>
      <Text style={styles.points}> {player.points}</Text>
    </View>
  ));

  return (
    <View style={[styles.scoreContainer, styles.scoreSquare]}>
      {listItems}

      <Pressable
        style={[styles.button, styles.playerSelect]}
        onPress={() => {
          props.toggleHistory(true);
        }}
      >
        <Text style={styles.playerSelect}>Historique</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.playerSelect]}
        onPress={() => {
          props.cancelLastGame();
        }}
      >
        <Text style={styles.playerSelect}>Annuler la dernière partie</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreItem: {
    width: "25%", // is 25% of container width
    textAlign: "center",
  },
  scoreItem5: {
    width: "20%", // is 20% of container width
    textAlign: "center",
  },
  scoreContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center", // if you want to fill rows left to right
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },

  scoreSquare: {
    backgroundColor: "#ebf6f9",
    borderRadius: 5,
  },
  playerName: {
    fontSize: 14,
    textAlign: "center",
  },
  points: {
    fontSize: 24,
    textAlign: "center",
  },
  playerSelect: {
    fontSize: 12,
    textAlign: "center",
    backgroundColor: "#468FAF",
    color: "white",
  },
  button: {
    borderRadius: 5,
    padding: 5,
    margin: 2,
    elevation: 2,
  },
});

export default Score;
