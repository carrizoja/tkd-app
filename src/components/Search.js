import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ShadowWrapper from "./ShadowWrapper";
const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const [error, setError] = useState("");

  const handleInputChange = (text) => {
    setInput(text);
  };

  const handleRemoveInput = () => {
    setInput("");
    onSearch("");
    setError("");
  };

  const search = () => {
    const regex = /^[a-zA-Z0-9 ]+$/;
    if (!regex.test(input)) {
      setError("Solo se permiten letras y números");
      return;
    } else {
      setError("");
      onSearch(input);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <ShadowWrapper style={styles.input}>
          <TextInput
            style={styles.textInput}
            placeholder="Buscar producto"
            placeholderTextColor={colors.white}
            value={input}
            onChangeText={handleInputChange}
          />
        </ShadowWrapper>

        <Pressable onPress={search}>
          <AntDesign name="search1" size={24} color="grey" />
        </Pressable>
        <Pressable onPress={handleRemoveInput}>
          <MaterialIcons name="cancel" size={24} color="grey" />
        </Pressable>
      </View>

      <View>
        <Text style={styles.error}>{error}</Text>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  input: {
    height: 40,
    margin: 12,
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "75%",
    color: colors.white,
  },
  error: {
    color: colors.primary,
    fontFamily: "Roboto",
    fontStyle: "italic",
    fontSize: 14,
    marginLeft: 20,
  },
    textInput: {
        color: colors.white,
    },
});
