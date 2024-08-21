import { Pressable, StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import { colors } from "../global/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";

const Header = ({ title}) => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.container}>
  
      {route.name !== "Home" && (
        <Pressable onPress={() => navigation.goBack()} style={styles.icon}>
          <Ionicons name="arrow-back" size={24} color={colors.white} />
        </Pressable>
      )}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    /* calculate the status bar height and add it to the height of the header */
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: 80,
    padding: 15,
    backgroundColor: colors.primary,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontFamily: 'RobotoMedium',
    fontSize: 20,
    color: colors.white,
    marginTop: 10,
  },
  icon: {
    position: "absolute",
    left: 15,
    top: 35
  },
});
