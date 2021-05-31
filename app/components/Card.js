import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
// import { Image } from "react-native-expo-image-cache";
import colors from "../config/colors";
import AppText from "./AppText";

const Card = ({
  onPress,
  title,
  subtitle,
  image,
  feed = false,
  home = false,
}) => {
  return home ? (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.75}
        style={styles.container}
      >
        <Image style={styles.image} source={image} />
        <View style={styles.textContainer}>
          <AppText>{title}</AppText>
          <AppText>{`${subtitle} ﷼`}</AppText>
        </View>
      </TouchableOpacity>
      {/*  <Modal
        presentationStyle="fullScreen"
        animationType="slide"
        visible={visible}
      >
        <ItemDetailsScreen
          item={{ id, title, subtitle, image }}
          closeModal={() => setVisible(false)}
        />
      </Modal> */}
    </>
  ) : (
    feed && (
      <>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.75}
          style={styles.feedContainer}
        >
          <Image style={styles.feedImage} uri={image} />
          <View style={styles.feedTextContainer}>
            <AppText style={styles.feedText}>{title}</AppText>
            <AppText style={styles.feedText}>{`${subtitle} ﷼`}</AppText>
          </View>
        </TouchableOpacity>
        {/* <Modal
          transparent={true}
          presentationStyle="overFullScreen"
          animationType="slide"
          visible={visible}
        >
          <ItemDetailsScreen
            item={{ id, title, subtitle, image }}
            closeModal={() => setVisible(false)}
          />
        </Modal> */}
      </>
    )
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 15,
    marginVertical: 10,
    backgroundColor: colors.white,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowColor: "black",
  },
  image: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  textContainer: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
  },
  feedContainer: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: colors.white,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowColor: "black",
  },
  feedImage: {
    height: 300,
    width: "100%",
  },
  feedTextContainer: {
    width: "100%",
    position: "absolute",
    backgroundColor: colors.black,
    opacity: 0.8,
    bottom: 0,
    paddingTop: 20,
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  feedText: {
    fontSize: 21,
    color: colors.white,
  },
});
