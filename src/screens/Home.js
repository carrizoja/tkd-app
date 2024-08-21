import { StyleSheet, View} from "react-native";
import Categories from "../components/Categories";
import { useNavigation } from "@react-navigation/native";

const Home = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Categories navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
