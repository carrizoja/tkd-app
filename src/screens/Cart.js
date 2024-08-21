import { FlatList, StyleSheet, Text, View } from "react-native";
import cart from "../data/cart.json";
import CartItem from "../components/CartItem";
import {colors} from "../global/colors";

const Cart = () => {
  return (
    <View style={styles.container}>
      <FlatList
         data={cart.items}
         keyExtractor={item => item.id}
         renderItem={({ item }) => <CartItem item={item}></CartItem>}
      />
       
      <View style={styles.containerConfirm}>
        <Text style={styles.textConfirm}>Confirmar</Text>
        <Text style={styles.textConfirm}>Total: $ {cart.total}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex:1,
  },
  containerConfirm: {
    backgroundColor: colors.primary,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textConfirm: {
    color: colors.white,
    fontSize: 20,
  },
});
