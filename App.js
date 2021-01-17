import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarItem from "./src/components/CarItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        image={require("./assets/ModelX.jpeg")}
        model="Model S"
        price="Starting at $69000"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
