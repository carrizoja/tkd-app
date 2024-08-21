import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import { colors } from "./src/global/colors";
import Navigator from "./src/navigation/Navigator";
import {store} from './src/app/store'
import {Provider} from 'react-redux'

export default function App() {
  const [fontLoaded] = useFonts(fonts);
 

  if (!fontLoaded) {
    return null;
  }

  return (
    <>
    <Provider store={store}>
    <Navigator />
    </Provider>
      <StatusBar style="auto" backgroundColor={colors.primaryLight} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    /* flex: 1, */
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
