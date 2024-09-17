import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import {colors} from "../global/colors";
import { usePostOrderMutation } from "../services/orders";
import { clearCart} from "../features/cart/cartSlice";
import EmptyComponent from "../components/EmptyComponent";

const Cart = ({navigation}) => {
  const cart = useSelector(state => state.cart);
  const localId = useSelector(state => state.auth.localId);
  const [triggerPostOrder] = usePostOrderMutation();
  const dispatch = useDispatch();

  const handleAddOrder = () => {
    const createdAt = new Date().toLocaleString();
    const order = {
      ... cart,
      createdAt,
    }
    triggerPostOrder({localId,order});
    dispatch(clearCart());
    navigation.navigate("OrdersStack");
  }

  const urlImage = "https://res.cloudinary.com/ijac-it-solutions/image/upload/v1726591057/img/tdkApp/momzujzp90gwy0zfpbiz.png"


  if(cart.items.length === 0){
    return (
      <EmptyComponent urlImage={urlImage} text="El carrito está vacío" />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
         data={cart.items}
         keyExtractor={item => item.id}
         renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.containerConfirm}>
        <Pressable onPress={handleAddOrder} >
        <Text style={styles.textConfirm}>Confirmar</Text>
        </Pressable>    
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

