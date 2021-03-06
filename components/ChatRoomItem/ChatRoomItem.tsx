import * as React from "react";
import { Text, Image, View, Pressable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import ChatRoomScreen from "../../screens/ChatRoomScreen";
import styles from "./styles";

export default function ChatRoomItem({ chatRoom }: { chatRoom: any }) {
  const user = chatRoom.users[1];
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(`ChatRoom`, { id: chatRoom.id });
  };

  const onProfile = () => {
    navigation.navigate(`ProfileScreen`, { id: chatRoom.id });
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <TouchableOpacity onPress={onProfile}>
        <Image source={{ uri: user.imageUri }} style={styles.image} />
      </TouchableOpacity>

      {chatRoom.newMessage ? (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessage}</Text>
        </View>
      ) : null}

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </Pressable>
  );
}
