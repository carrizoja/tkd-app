import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../features/counter/counterSlice';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors } from '../global/colors';
const Counter = () => {
  const quantity = useSelector((state) => state.counter.quantity);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => dispatch(decrement())}>
        <Text style={styles.text}>-</Text>
      </Pressable>
      <Text style={styles.quantity}>{quantity}</Text>
      <Pressable style={styles.button} title="+" onPress={() => dispatch(increment())}>
        <Text style={styles.text}>+</Text>
      </Pressable>
      <Pressable style={styles.reset} title="Reset" onPress={() => dispatch(reset())}>
        <Text style={styles.text}>Reset</Text>
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 10,
  },
  quantity: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  button: {
    height: 40,
    width: 40,
    backgroundColor: colors.primary,
    color: 'white',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reset: {
    backgroundColor: colors.primary,
    color: colors.white,
    padding: 10,
    borderRadius: 5,
    height: 40,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 18,
  },
});
