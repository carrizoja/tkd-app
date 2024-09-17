
import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import { removeItemFromCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const CartItem = ({item}) => {
  const quantity = useSelector((state) => state.counter.quantity);
  const dispatch = useDispatch();
  const onDelete = (id) => {
    dispatch(removeItemFromCart(id));
  }
  
  return ( 
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.brand}>Marca: {item.brand}</Text>
        <Text style={styles.price}>Precio unidad: $ {item.price}</Text>
        <Text style={styles.price}>Cantidad: {quantity}</Text>
      </View>
      <Pressable onPress={() => onDelete(item.id)}>
        <Entypo name="trash" size={24} color="black" />
      </Pressable>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginHorizontal: '5%',
        backgroundColor: '#f9f9f9',
        marginVertical: 10,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
    },
    containerText: {
        width: '80%',
        gap: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    brand: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})