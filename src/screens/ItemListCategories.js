import { StyleSheet, View, FlatList} from "react-native";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import Productitem from "../components/Productitem";
import { useSelector } from "react-redux";

const ItemListCategories = ({route}) => {

  const products = useSelector((state) => state.shop.products);
  const { category } = route.params;
  const [productsFilteredByCategory, setProductsFilteredByCategory] = useState([]);
 

  useEffect(() => {
    setProductsFilteredByCategory
    (products.filter(product => product.category === category));
    }, [category]);

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
