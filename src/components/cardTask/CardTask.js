import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CardTask = ({ task }) => {
  return (
    <View style={styles.container} key={task.id}>
      <Text style={styles.text}>ID: {task.id}</Text>
      <Text style={styles.text}>Task: {task.name}</Text>
    </View>
  );
};

export default CardTask;

const styles = StyleSheet.create({
  container: {
    width:"90%",
    backgroundColor:"#FF6666",
    marginHorizontal:"5%",
    marginVertical:10,
    padding:20,
    borderRadius:5
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
});
