import { borderRadius, color } from '@mui/system';
import * as React from 'react';
import { Text, Image, View } from 'react-native';
import styles from './styles'

export default function ChatRoomItem({ chatRoom }) {
  const user = chatRoom.users[1]
    return (
        <View style={styles.container}>
      <Image source={{ uri: user.imageUri}} style={styles.image}/>

      {chatRoom.newMessage ? <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{chatRoom.newMessage}</Text>
      </View> : null}

        <View style={styles.rightContainer}>
          <View style={styles.row}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
          </View>
          <Text numberOfLines={1} style={styles.text}>{chatRoom.lastMessage.content}</Text>
        </View>
    </View>
  );
}