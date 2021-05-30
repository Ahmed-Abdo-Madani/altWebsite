import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sup !!</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 67,
    color: "white",
  },
});
