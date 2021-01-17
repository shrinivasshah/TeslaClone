import React from "react";
import { StyleSheet, ImageBackground, Text, View } from "react-native";
import StyledButton from "./StyledButton";

function CarItem({ image, model, subTitleText, specialSubtitleText }) {
  return (
    <View style={styles.carContainer}>
      {/* background Image */}
      <ImageBackground style={styles.image} source={image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{model}</Text>
        <Text style={styles.subTitle}>
          {subTitleText}{" "}
          <Text style={styles.subTitleUnderline}>{specialSubtitleText}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content="custom order"
          onPressHandler={() => console.warn("custom primary button pressed")}
        />
        <StyledButton
          content="Existing Inventory"
          onPressHandler={() => console.warn("custom secondary button pressed")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carContainer: {
    flex: 1,
    alignSelf: "stretch",
  },
  titles: {
    marginTop: "30%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subTitleUnderline: {
    textDecorationLine: "underline",
  },
  image: {
    // flex: 1,
    // alignSelf: "stretch",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonContainer: {
    position: "absolute",
    width: "100%",
    bottom: 50,
  },
});

export default CarItem;
