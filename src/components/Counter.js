import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counter/counterSlice";
import { TextInput } from "react-native-web";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.containerCounter}>
        <Pressable style={styles.button} onPress={() => dispatch(increment())}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <View>
          <Text>{count}</Text>
        </View>

        <Pressable onPress={() => dispatch(decrement())}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
      <View style={styles.containerInput}>
        <TextInput style={styles.input} value={String(input)} onChangeText={handleInput}/>
        <Pressable onPress={() => console.log("add")} style={styles.button}>
          <Text style={styles.buttonText}>Agregar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
