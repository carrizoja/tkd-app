import { StyleSheet, Text, View, Pressable } from "react-native";
import ShadowWrapper from "./ShadowWrapper";
import { colors } from "../global/colors";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const CategoryItem = ({item}) => {

  const navigation = useNavigation();

  return (
    <>
        
      <Pressable onPress={() => navigation.navigate("Products", { category: item })}>
      <LinearGradient
            colors={['rgba(247, 198, 198, 0.5)', 'rgba(247, 198, 198, 0)']}
            start={{ x: 0, y: 0 }} // Start at the top left
            end={{ x: 1, y: 1 }} 
            style={styles.container}
          >
            <Text style={styles.text}>{item}</Text>
          </LinearGradient>
      </Pressable>
    </>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 16,
    color: colors.black,
    fontFamily: "RobotoLight",
    
  },
});
