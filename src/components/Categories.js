import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import CategoryItem from "./CategoryItem";
import { useNavigation } from "@react-navigation/native";
import { useGetCategoriesQuery } from "../services/shop";
import LoadingSpinner from "./LoadingSpinner";


const Categories = () => {

  const {data:categories, isLoading} = useGetCategoriesQuery();

  const navigation = useNavigation();

  if(isLoading){
    return <LoadingSpinner />
  }

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
