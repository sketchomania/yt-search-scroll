import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { BASE_URL, API_KEY } from "@env";

import SearchBar from "../components/SearchBar";
import VideoContainer from "../components/VideoContainer";
import { globalStyles } from "../../constants/styles";

const SearchScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const { colors } = useTheme();

  const [inputTerm, setInputTerm] = useState("");

  const makeYoutubeRequest = async () => {
    const myHttpRequest = new XMLHttpRequest();
    if (!myHttpRequest) {
      console.log("Giving up : Cannot create an XMLHTTP instance");
      return false;
    }

    myHttpRequest.onreadystatechange = () => {
      if (myHttpRequest.readyState !== 4) {
        return;
      }
      if (myHttpRequest.status === 200) {
        // console.log("😀 Got the response: \n", myHttpRequest.responseText);
        setLoading(false);
        const response = myHttpRequest.responseText;
        const json = JSON.parse(response);
        setData([...data, ...json.items]);
        setNextPageToken(json.nextPageToken);
        // console.log("\n  pageToken😏: ", nextPageToken);
        // console.log("\n data[] (json.items)😏: \n", "data: ", data);
      } else {
        console.log(
          "There was a problem with the request.\nSome error occured 😐"
        );
      }
    };

    const url = `${BASE_URL}search?part=snippet&q=${inputTerm}&key=${API_KEY}&pageToken=${nextPageToken}&order=relevance&maxResults=8`;

    await myHttpRequest.open("GET", url);
    myHttpRequest.send();
  };

  const renderFooter = () => {
    return (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    );
  };
  // console.log("line 63:", inputTerm);

  const handleLoadMore = () => {
    console.log("loading more results ... ");
    makeYoutubeRequest();
  };

  return (
    <View
      style={[globalStyles.container, { backgroundColor: colors.background }]}
    >
      <SearchBar
        inputTerm={inputTerm}
        onInputTermChange={(inputTerm) => {
          setData([]);
          setInputTerm(inputTerm);
        }}
        onInputTermSubmit={makeYoutubeRequest}
      />
      {/* <Text>{inputTerm}</Text> */}

      <View style={styles.resultContainer}>
        {isLoading ? (
          <>
            <ActivityIndicator />
            {API_KEY ? (
              <Text>{""}</Text>
            ) : (
              <>
                <Text>{"\n"}</Text>
                <Text>{"\n"}</Text>
                <Text style={{ color: colors.text }}>
                  {"🟤 Check your API_KEY is valid or not‼️"}
                </Text>
              </>
            )}
          </>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) =>
              item.etag + Math.random().toString(36).slice(2)
            }
            renderItem={({ item }) => <VideoContainer item={item.snippet} />}
            onEndReachedThreshold={0}
            onEndReached={handleLoadMore}
            ListFooterComponent={renderFooter}
          />
        )}
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
  loaderStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
    // width: 200,
    // marginHorizontal:100,
  },
});

export default SearchScreen;
