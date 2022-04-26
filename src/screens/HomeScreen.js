import * as React from "react";
import { View, Button, Image, Text, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.card, styles.elevation]}>
        <View>
          <Image
            source={require("../../assets/youtube-icon.jpg")}
            style={styles.card_image}
          />
          <View style={styles.text_container}>
            <Text style={{ color: "white"}}>Search</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={{ color: "#000", fontSize: 20 }}>Youtube Search</Text>
          <Text></Text>
          <Text style={styles.card_description}>
            😃 Infinite scroll feature 🔥
          </Text>
          <Text></Text>
          <Text style={styles.card_description}>
            😃 Bottom tab navigation 🔥
          </Text>
        </View>
      </View>

      <View>
        <Button
          title="Go to Search"
          onPress={() => navigation.navigate("Search")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  card: {
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
    margin: 40,
  },
  elevation: {
    elevation: 20,
    shadowColor: "#52006A",
  },
  textContainer: {
    alignItems: "center",
    padding: 10,
    width: 400,
  },
  card_image: {
    width: 400,
    height: 250,
    borderRadius: 10,
  },
  text_container: {
    position: "absolute",
    width: 400,
    alignItems: "center",
    padding: 5,
    height: 30,
    bottom: 0,
    backgroundColor: "rgba(0,0,0, 0.3)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  card_description: {
    color: "#777",
    paddingTop: 5,
  },
});

export default HomeScreen;
