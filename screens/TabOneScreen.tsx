import { borderRadius, color } from '@mui/system';
import * as React from 'react';
import { Text, Image, View, StyleSheet, FlatList } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem/index';

import chatRoomsData from '../assets/dummy-data/ChatRooms';

const chatRoom1 = chatRoomsData[3]
const chatRoom2 = chatRoomsData[1]

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList 
        data={chatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  }
});