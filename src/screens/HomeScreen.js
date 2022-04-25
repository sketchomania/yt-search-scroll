import * as React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>😃 It's a React Native Expo App 🔥</Text>
      <Text></Text>
      <Text></Text>
      <Text>😃 Search result from youtube 🔥</Text>
      <Text></Text>
      <Text></Text>
      <Text>😃 Search result from youtube 🔥</Text>
      <Text></Text>
      <Text></Text>
      <Text>😃 Bottom tab navigation 🔥</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Button
        title="Go to Search"
        onPress={() => navigation.navigate("Search")}
      />
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
});

export default HomeScreen;
