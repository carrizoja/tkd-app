import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetOrderByUserQuery } from '../services/orders';

const OrderDetail = ({ route }) => {
  const { id } = route.params;
  const localId = useSelector((state) => state.auth.localId);
  const { data: order, isSuccess } = useGetOrderByUserQuery({ localId, orderId: id });

  useEffect(() => {
    if (isSuccess) {
      console.log(order);
    }
  }, [isSuccess]);

  if (!isSuccess) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>No ha hecho pedidos</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.orderDate}>Fecha: {order.createdAt}</Text>
      <FlatList
        data={order.items}
        keyExtractor={(item) => item.productId}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.title}</Text>
            <Text style={styles.itemQuantity}>Cantidad: {item.quantity}</Text>
            <Text style={styles.itemPrice}>Precio: ${item.price}</Text>
          </View>
        )}
      />
      <Text style={styles.totalAmount}>Total: ${order.total}</Text>
    </View>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  orderId: {
    fontSize: 16,
    marginBottom: 10,
  },
  orderDate: {
    fontSize: 16,
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 16,
    marginTop: 5,
  },
  itemPrice: {
    fontSize: 16,
    marginTop: 5,
    color: '#888',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
});