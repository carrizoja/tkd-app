import { Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { Image} from "react-native";
import { colors } from "../global/colors";
import ShadowWrapper from "./ShadowWrapper";
import { useNavigation } from "@react-navigation/native";
const Productitem = ({ product}) => {

  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <Pressable onPress= {() => navigation.navigate("Detail", {id:product.id})}>
      <ShadowWrapper style={styles.container}>
        <Image
          source={{ uri: product.thumbnail }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.containerText}>
          <Text style={[styles.title, width < 300 ? styles.titleMin : styles.titleMax]}>{product.title}</Text>
          <Text style={styles.rating}>{product.rating}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
        </View>
      </ShadowWrapper>
    </Pressable>
  );
};

export default Productitem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    margin: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  title: {
    fontFamily: "Roboto",
    fontWeight:"light",
    fontSize: 16,
    width: 240,
  },
  titleMin: {
    fontSize: 14,
  },
  titleMax: {
    fontSize: 18,
  },
  image: {
    minWidth: 100,
    width:"25vw",
    maxWidth:150,
    minHeight: 100,
    height: "25vw",
    maxHeight: 150,
    aspectRatio: 1,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  containerText: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
  },
  rating: {
    color: colors.black,
    fontFamily: "Roboto",
    fontStyle: "Light",
    fontSize: 14,
  },
    price: {
        color: colors.black,
        fontFamily: "Roboto",
        fontStyle: "italic",
        fontSize: 14,
    },
});
