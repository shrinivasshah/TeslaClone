import React from "react";
import { StyleSheet, ImageBackground, Text, View } from "react-native";

function CarItem({ image, model, price }) {
  return (
    <View style={styles.carContainer}>
      {/* background Image */}
      <ImageBackground style={styles.image} source={image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{model}</Text>
        <Text style={styles.subTitle}>{price}</Text>
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
  image: {
    // flex: 1,
    // alignSelf: "stretch",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});

export default CarItem;
