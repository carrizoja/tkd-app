import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import { colors } from "./src/global/colors";
import MainNavigator from "./src/navigation/MainNavigator";
import { store } from "./src/app/store";
import { Provider } from "react-redux";
import { init } from "./src/db/index";

export default function App() {

 init();

  const [fontLoaded] = useFonts(fonts);

  if (!fontLoaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
      <StatusBar style="auto" backgroundColor={colors.primaryLight} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  textTitle: {
    color: "#000",
    fontSize: 50,
  },
  containerInput: {
    gap: 20,
    flexDirection: "row",
    width: "95%",
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    flex: 2,
    margin: 10,
    paddingStart: 10,
  },
});
