import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React, { useEffect } from "react";
import { Image } from "react-native";
import SubmitButton from "../components/SubmitButton";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../services/users";
import LoadingSpinner from "../components/LoadingSpinner";
const MyProfile = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.localId);
  const { data: user, isLoading } = useGetUserQuery({ localId });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <View style={styles.container}>
      <Image
        source={
          user.image ? { uri: user.image } : require("../../assets/profile.jpg")
        }
        resizeMode="cover"
        style={styles.image}
      ></Image>
      <SubmitButton
        title="Agregar imagen de perfil"
        onPress={() => navigation.navigate("ImageSelector")}
      />
      <SubmitButton
        title="Agregar localización"
        onPress={() => navigation.navigate("LocationSelector")}
      />
      <FlatList
        data={user.locations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("LocationSelector", { location: item })
              }
            >
              <Text>{item.address}</Text>
            </Pressable>
          );
        }}
      ></FlatList>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 50,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});
