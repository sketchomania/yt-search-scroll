import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import SearchScreen from "./src/screens/SearchScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <SearchScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
