import { StyleSheet, Text, View} from "react-native";
import { Image } from "react-native";
import { colors } from "../global/colors";
import ButtonPrimary from "../components/ButtonPrimary";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useGetProductQuery } from "../services/shop";
import LoadingSpinner from "../components/LoadingSpinner";
import Counter from "../components/Counter";
import { useSelector } from "react-redux";

const ItemDetail = ({ route }) => {
  const { id } = route.params;
  const {data:product, isLoading} = useGetProductQuery(id);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.counter.quantity);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity,
      })
    );
    navigation.popToTop();
    navigation.navigate("CartStack");

  }

  if (isLoading) return <LoadingSpinner />

  return (
    <View style={styles.container}>
      <View style={styles.containerDetail}>
        <Image
          source={{ uri: product.thumbnail }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>Precio: $ {product.price}</Text>
        </View>
        <Counter />
       <ButtonPrimary text="Comprar" onPress={
          handleAddToCart
       } />
      </View>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  containerDetail: {
    flexDirection: "column",
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
    marginVertical: 10,
  },
  containerText: {
    gap: 10,
    margin: 20,
    justifyContent: "center",
    width: "80%",
    marginHorizontal: "10%",
  },
  title: {
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: colors.primary,
    color: "white",
    width: "80%",
    marginHorizontal: "10%",
    height: 40,
    borderRadius: 5,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
