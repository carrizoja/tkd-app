import { StyleSheet, Text, View} from "react-native";
import products from "../data/products.json";
import { Image } from "react-native";
import { colors } from "../global/colors";
import ButtonPrimary from "../components/ButtonPrimary";

const ItemDetail = ({ route }) => {
  const { id } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.containerDetail}>
        <Image
          source={{ uri: products[id].thumbnail }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{products[id].title}</Text>
          <Text style={styles.description}>{products[id].description}</Text>
          <Text style={styles.price}>Precio: $ {products[id].price}</Text>
           
        </View>
       <ButtonPrimary text="Comprar" />
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
    gap: 15,
    margin: 20,
    justifyContent: "center",
    width: "80%",
    marginHorizontal: "10%",
  },
  title: {
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
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
