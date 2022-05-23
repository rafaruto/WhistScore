import React, { Component } from "react";
// Import vector icons
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Modal,
  Text,
  StyleSheet,
  View,
  Pressable,
  TextInput,
} from "react-native";

export default class NewGame extends Component {
  state = {
    player1: "Jérémy",
    player2: "Adon",
    player3: "Jeny",
    player4: "Clément",
    player5: "Deus",
    deadplayer: false,
  };

  handlePlayer1 = (text) => {
    this.setState({ player1: text });
  };

  handlePlayer2 = (text) => {
    this.setState({ player2: text });
  };

  handlePlayer3 = (text) => {
    this.setState({ player3: text });
  };

  handlePlayer4 = (text) => {
    this.setState({ player4: text });
  };
  handlePlayer5 = (text) => {
    this.setState({ player5: text });
  };

  toggleDeadPlayer = () => {
    this.setState({ deadplayer: !this.state.deadplayer });
  };

  getIconName = () => {
    if (this.state.deadplayer) {
      return "check-circle";
    } else {
      return "circle";
    }
  };

  getArray = () => {
    let userArray = [];
    userArray.push(this.state.player1);
    userArray.push(this.state.player2);
    userArray.push(this.state.player3);
    userArray.push(this.state.player4);
    if (this.state.deadplayer) {
      userArray.push(this.state.player5);
    }
    return userArray;
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.toggle}
        onRequestClose={() => {
          {
            this.props.toggleFunction(this.getArray());
          }
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ fontSize: 20 }}>Sélectionnez les joueurs</Text>

            <Pressable onPress={this.toggleDeadPlayer}>
              <Text style={{ margin: 15 }}>
                <Icon name={this.getIconName()} size={20} color="#468FAF" />
                Joueur mort
              </Text>
            </Pressable>

            <TextInput
              maxLength={11}
              style={styles.input}
              value={this.state.player1}
              onChangeText={this.handlePlayer1}
            />
            <TextInput
              maxLength={11}
              style={styles.input}
              value={this.state.player2}
              onChangeText={this.handlePlayer2}
            />
            <TextInput
              maxLength={11}
              style={styles.input}
              value={this.state.player3}
              onChangeText={this.handlePlayer3}
            />
            <TextInput
              maxLength={11}
              style={styles.input}
              value={this.state.player4}
              onChangeText={this.handlePlayer4}
            />

            <TextInput
              editable={this.state.deadplayer}
              maxLength={11}
              style={styles.input}
              value={this.state.player5}
              onChangeText={this.handlePlayer5}
            />

            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.playerSelect]}
                onPress={() => {
                  this.props.toggleFunction(this.getArray());
                }}
              >
                <Text style={styles.playerSelect}>Nouvelle partie</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.cancel]}
                onPress={() => {
                  this.props.toggleFunction();
                }}
              >
                <Text style={styles.cancel}>Annuler</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",

    marginTop: 22,
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
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
  button: {
    fontSize: 12,
    textAlign: "center",
  },
  playerSelect: {
    backgroundColor: "#468FAF",
    color: "white",
  },

  cancel: {
    backgroundColor: "#ff595e",
    color: "white",
  },
  input: {
    height: 40,
    width: 150,
    margin: 3,
    borderWidth: 1,
    padding: 10,
    textAlign: "center",
  },
  button: {
    borderRadius: 5,
    padding: 5,
    margin: 5,

    elevation: 2,
  },

  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
  },
});
