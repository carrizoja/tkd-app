import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../../../assets/logo.png")}
        ></Image>
        <Text style={styles.textTitle}>TKD App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  textTitle: {
    color: "#000",
    fontSize: 50,
  },
});
