
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
const CartItem = ({item}) => {

  return ( 
  
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.price}>$ {item.price}</Text>
      </View>
      <Entypo name="trash" size={24} color="black" />
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
        fontSize: 16,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})