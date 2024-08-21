import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import CategoryItem from "./CategoryItem";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Categories = () => {

  const categories = useSelector((state) => state.shop.categories);

  const navigation = useNavigation();

  return (
 
      <FlatList
        data={categories}
        keyExtractor={item => item}
        renderItem={({ item }) => <CategoryItem navigation={navigation} item={item}/>}
      />
 
  );
};

export default Categories;

const styles = StyleSheet.create({});
