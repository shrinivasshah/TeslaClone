import React from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";

function StyledButton({ type, content, onPressHandler }) {
  const BGcolorScheme = type === "primary" ? "#171a20cc" : "#ffffffa6";
  const Textcolor = type === "primary" ? "#fff" : "#000";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: BGcolorScheme }]}
        onPress={onPressHandler}
      >
        <Text style={[styles.text, { color: Textcolor }]}>{content}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    padding: 10,
  },
  button: {
    // backgroundColor: "white",
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});

export default StyledButton;
