import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import orders from '../data/orders.json'
import OrderItem from '../components/OrderItem.js'
const Orders = () => {
  return (
    <View>
      <FlatList
         data={orders}
         keyExtractor={item => item.id}
         renderItem={({ item }) => <OrderItem item={item}></OrderItem>}
      />
       
   
    </View>
  )
}

export default Orders

