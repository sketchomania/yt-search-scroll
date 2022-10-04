import * as React from "react";
import { View, Button, Image, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { globalStyles } from "../../constants/styles";

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={[globalStyles.container, { backgroundColor: colors.background }]}>
      <View
        style={[
          styles.card,
          styles.elevation,
          { backgroundColor: colors.card },
          { shadowColor: colors.text },
        ]}
      >
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
          <Text style={{ color: colors.text, fontSize: 20 }}>
            Youtube Search
          </Text>
          <Text></Text>
          <Text style={[styles.card_description, { color: colors.text }]}>
            📌 Infinite scroll feature
          </Text>
          <Text></Text>
          <Text style={[styles.card_description, { color: colors.text }]}>
            🟤 Bottom tab navigation
          </Text>
          <Text></Text>
          <Text style={[styles.card_description, { color: colors.text }]}>
            🔥 Theme based background
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
  card: {
    borderRadius: 10,
    overflow: "hidden",
    margin: 40,
  },
  elevation: {
    elevation: 20,
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
    paddingTop: 5,
  },
});

export default HomeScreen;
