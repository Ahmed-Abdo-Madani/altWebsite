import React, { useEffect } from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

import logger from "../utility/logger";

const requsetPermission = async () => {
  const { granted } = await ImagePicker.requestCameraPermissionsAsync();
  if (!granted) {
    alert("Please grant camera permission to select images.");
  }
};

const AppImagePicker = ({ imageURI, onSelect, style }) => {
  useEffect(() => {
    requsetPermission();
  }, []);

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });

    try {
      if (!result.cancelled) onSelect(result.uri);
    } catch (error) {
      logger.log("ImagePicker error :" + error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={selectImage}>
      <View style={[styles.container, style]}>
        {!imageURI ? (
          <MaterialCommunityIcons
            name="plus"
            size={100}
            color={colors.blueLight}
          />
        ) : (
          <Image source={{ uri: imageURI }} style={styles.image} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppImagePicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.creamyDarkTrans,
    borderRadius: 15,
    overflow: "hidden",
    width: "100%",
    height: 200,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
