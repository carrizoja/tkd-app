import { FlatList, Text, View } from 'react-native'
import React from 'react'
import OrderItem from '../components/OrderItem.js'
import { useGetOrdersByUserQuery } from '../services/orders.js'
import LoadingSpinner from '../components/LoadingSpinner.js'
import { useSelector } from 'react-redux'
import EmptyComponent from '../components/EmptyComponent.js'
const Orders = () => {

  const localId = useSelector(state => state.auth.localId);
  const {data: orders, isLoading} = useGetOrdersByUserQuery(localId);
  const urlImage = "https://res.cloudinary.com/ijac-it-solutions/image/upload/v1726591057/img/tdkApp/csbyydaht9qkevsodt04.png"

  if(isLoading){
    return <LoadingSpinner />
  }
      
  if(orders.length === 0){
    return (
      <EmptyComponent urlImage={urlImage} text="No hay pedidos" />
    )
  }

  return (
    <View>
      <FlatList
         data={orders}
         keyExtractor={(item) => item.id}
         renderItem={({ item }) => <OrderItem item={item}></OrderItem>}
      />
       
   
    </View>
  )
}

export default Orders

