import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

const VideoContainer = ({ item }) => {
  return (
    <TouchableOpacity
      style={[styles.videoContainer, { backgroundColor: colors.card }]}
    >
      <Image
        style={styles.videoThumbnail}
        source={{
          uri: item.thumbnails.default.url,
        }}
      />
      <View style={styles.textInfo}>
        <Text>{item.title}</Text>
        <Text style={[styles.channelName, { color: colors.text }]}>
          {item.channelTitle}
          {"\n"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  videoThumbnail: {
    width: 120,
    height: 60,
  },
  textInfo: {
    marginHorizontal: 5,
  },
  channelName: {
    fontSize: 10,
  },
});

export default VideoContainer;
