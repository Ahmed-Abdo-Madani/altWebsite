import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, TextInput, View, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppIcon from "../components/AppIcon";

import { getHomeItems } from "../actions/itemsAction";
// import LoginScreen from "./LoginScreen";
// import CartScreen from "./CartScreen";

// import AppActivityIndicator from "../components/AppActivityIndicator";
import CategoryList from "../components/CategoryList";
// import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
  const [visible, setVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [searchText, setSearchText] = useState();
  const [page_number, setPageNumber] = useState(1);
  const [page_size, setPageSize] = useState(5);

  // const { userInfo } = useSelector((state) => state.userLogin);
  const getHomeScreenItems = useSelector((state) => state.getHomeScreenItems);
  const { loading, error, items } = getHomeScreenItems;

  // const outOfStack_navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeItems());

    // if (route.params?.addedToCart) setVisible(true);
    // }, [route.params]);
  }, []);

  return (
    <Screen>
      {loading ? (
        <>
          {/* <AppActivityIndicator visible={loading} /> */}
          <AppText
            style={[
              styles.text,
              {
                color: colors.darkGray,
                fontSize: 15,
                alignSelf: "center",
                position: "absolute",
                top: "75%",
              },
            ]}
          >
            جاري التحميل ...
          </AppText>
        </>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.container}
          data={items.slice(0, page_number * page_size)}
          refreshing={refreshing}
          onRefresh={() => {
            dispatch(getHomeItems(true));
          }}
          onEndReached={() => {
            setPageNumber(page_number + 1);
          }}
          onEndReachedThreshold={0.5}
          keyExtractor={(item) => item.id}
          ListHeaderComponentStyle={
            {
              /* marginBottom: 190,
            backgroundColor: colors.darkGray,
            paddingTop: constants.statusBarHeight, */
            }
          }
          ListHeaderComponent={
            <>
              <View style={styles.header}>
                <View style={styles.textContainer}>
                  <AppText style={styles.text}>مرحباً 👋</AppText>
                  <AppText style={[styles.text, { fontSize: 21 }]}>
                    اليك عالماً من الهدايا.🎁
                  </AppText>
                </View>
                <View style={styles.headerIconCintainer}>
                  <AppIcon
                    style={styles.headerIcon}
                    name="cart"
                    /*  onPress={() => {
                      // setVisible(true)
                      outOfStack_navigation.navigate(
                        userInfo ? "homeCart" : "profileStack"
                      );
                    }} */
                  />
                  {/* <AppIcon
                    style={styles.headerIcon}
                    name="apps"
                    onPress={() => setVisible(true)}
                  /> */}
                </View>
              </View>

              <View style={styles.serachBar}>
                <TextInput
                  style={styles.input}
                  placeholder="إبحث هنا ..."
                  onChangeText={(txt) => setSearchText(txt)}
                  value={searchText}
                />
                <AppIcon
                  // onPress={() => navigation.navigate("search", searchText)}
                  name="magnify"
                />
              </View>
              <CategoryList />

              {/* <HeroSlider images={HeroImages} /> */}
            </>
          }
          ListFooterComponent={
            <View style={styles.header}>
              {/* <AppText style={styles.text}>Thank u 😊</AppText>
              <AppText style={[styles.text, { fontSize: 27 }]}>
                We hope u come back 🙌
              </AppText> */}
            </View>
          }
          renderItem={({ item }) => (
            <Card
              home
              id={item.id}
              title={item.data.name}
              subtitle={item.data.price}
              image={item.data.imageURL}
              // onPress={() => navigation.navigate("itemDetails", item)}
            />
          )}
        />
      )}

      {/*  <Modal
        transparent={true}
        presentationStyle="overFullScreen"
        animationType="slide"
        visible={visible}
      >
        <View style={styles.login}>
          {userInfo ? (
            <CartScreen
              closeModal={(anyCallback) => {
                setVisible(false);
                anyCallback;
              }}
            />
          ) : (
            <LoginScreen closeModal={() => setVisible(false)} />
          )}
        </View>
      </Modal> */}
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 11,
  },

  header: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 5,
    width: "100%",
  },
  login: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerIconCintainer: {
    flexDirection: "row",
  },
  headerIcon: {
    margin: 5,
  },
  textContainer: {
    alignItems: "flex-end",
  },
  text: {
    color: colors.darkGray,
    fontSize: 55,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
  },
  serachBar: {
    marginVertical: 10,
    flex: 1,
    flexDirection: "row-reverse",
    padding: 5,
    borderRadius: 25,
    backgroundColor: colors.creamyDark,
  },
  input: {
    textAlign: "right",
    marginRight: 15,
    flex: 1,
  },
});
