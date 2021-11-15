import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/core";
import Message from "../components/Message";
import chatRoomData from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

export default function ChatRoomScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(`HomeScreen`);
  };

  navigation.setOptions({
    title: "Yuvraj",
    headersStyle: {
      backgroundColor: "white",
    },
    headerTintColor: "black",
    headerLeft: () => (
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={onPress}
        activeOpacity={0.2}
      >
        <AntDesign
          name="left"
          size={24}
          color="black"
          style={{ marginRight: 7, marginLeft: -8 }}
        />

        <Avatar
          rounded
          source={{
            uri: "https://lh3.googleusercontent.com/ogw/ADea4I4MEvhya1pSoZN-3NAh4LhMoHZe4wMeLzfYZosnpg=s83-c-mo",
          }}
        />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <View
        style={{
          flexDirection: "row",
          right: 10,
        }}
      >
        <AntDesign
          name="search1"
          size={24}
          color="black"
          style={{ right: 30 }}
        />
        <Feather name="more-vertical" size={24} color="black" />
      </View>
    ),
  });

  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
