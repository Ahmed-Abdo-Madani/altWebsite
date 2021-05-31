import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import firebase from "firebase/app";
import { Provider } from "react-redux";
import store from "./app/store";

import HomeScreen from "./app/screens/Home";

const firebaseConfig = {
  apiKey: "AIzaSyBQjCScPiH1kMvuXWi0xVwtNj3iAo1UOHc",
  authDomain: "altayar-2021.firebaseapp.com",
  projectId: "altayar-2021",
  storageBucket: "altayar-2021.appspot.com",
  messagingSenderId: "622653479229",
  appId: "1:622653479229:web:69e72faf73bb618d16cd54",
  measurementId: "G-JTGJX916N3",
};
// Initialize Firebase

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <HomeScreen />
      </View>
    </Provider>
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
