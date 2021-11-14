import { borderRadius, color } from "@mui/system";
import * as React from "react";
import { Text, Image, View, StyleSheet, FlatList } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem/index";
import chatRoomsData from "../assets/dummy-data/ChatRooms";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons"; 

const chatRoom1 = chatRoomsData[3];
const chatRoom2 = chatRoomsData[1];

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.cameraContainer}>
        <Entypo name="camera" size={27} color="#595959" />
      </View>
      <View style={styles.editContainer}>
        <MaterialIcons name="mode-edit" size={27} color="white" />
      </View>
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
