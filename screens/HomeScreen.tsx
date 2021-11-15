import { borderRadius, color } from "@mui/system";
import * as React from "react";
import { View, StyleSheet, FlatList, Pressable, TouchableOpacity } from 'react-native';
import { Avatar } from "react-native-elements";
import ChatRoomItem from "../components/ChatRoomItem/index";
import chatRoomsData from "../assets/dummy-data/ChatRooms";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useLayoutEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function TabOneScreen({ navigation }: { navigation: any }) {
  const onProfile = () => {
    navigation.navigate(`ProfileScreen`);
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headersStyle: {
        backgroundColor: "white",
      },
      headerTintColor: "black",
      headerLeft: () => (
        <Pressable>
          <Avatar
            rounded
            source={{
              uri: "https://lh3.googleusercontent.com/ogw/ADea4I4MEvhya1pSoZN-3NAh4LhMoHZe4wMeLzfYZosnpg=s83-c-mo",
            }}
          />
        </Pressable>
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
  }, []);
  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.cameraContainer}>
        <Entypo name="camera" size={27} color="#595959" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.editContainer}>
        <MaterialIcons name="mode-edit" size={27} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
  editContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#3777f0",
    bottom: 14,
    right: 20,
    padding: 14,
    borderRadius: 100,
    elevation: 15,
  },
  cameraContainer: {
    alignSelf: "flex-end",
    backgroundColor: "white",
    bottom: 35,
    right: 20,
    padding: 14,
    borderRadius: 100,
    elevation: 15,
  },
});
