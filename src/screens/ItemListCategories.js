import { StyleSheet, View, FlatList, Text} from "react-native";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import Productitem from "../components/Productitem";
import { useGetProductsQuery } from "../services/shop";
import LoadingSpinner from "../components/LoadingSpinner";

const ItemListCategories = ({route}) => {
  const { category } = route.params;
  const {data:products, isSuccess, isLoading, isError, error} = useGetProductsQuery(category);
  const [productsFilteredByCategory, setProductsFilteredByCategory] = useState([]);
 

  useEffect(() => {
    if (isSuccess) {
      setProductsFilteredByCategory(products);
    }
    if (isError) {
      console.log(error);
    }
    }, [category, isSuccess, isError]);

    const onSearch = (input) => {
        if (!input) {
            setProductsFilteredByCategory(products.filter(product => product.category === category));
            return;
        } else {
            setProductsFilteredByCategory(
                productsFilteredByCategory.filter(product => product.title.includes(input))
            );
        }
      
    }

    if (isLoading) return <LoadingSpinner />
    if (isError) return <View><Text>{error.message}</Text></View>

  return (
    <View style = {styles.container}>
      <Search onSearch = {onSearch}/>
      <FlatList
        data={productsFilteredByCategory}
        keyExtractor={item => item.id}
        renderItem= {({ item }) =>  <Productitem
         product={item}
        />}
        />     
    </View>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
    container: {    
        width: "100%",
    }
});
