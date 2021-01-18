import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import StyledButton from "./StyledButton";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <Header />
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}
        />

        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titles: {
    // marginTop: "5%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitleCTA: {
    textDecorationLine: "underline",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  buttonsContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});
