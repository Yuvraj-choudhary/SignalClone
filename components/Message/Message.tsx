import React from "react";
import { View, Text, StyleSheet } from "react-native";

const blue = "#3777f0";
const grey = "lightgrey";

const myID = "u1";

const Message = ({ message }) => {
  const isMe = message.user.id === myID;

  return (
    <View
      style={[
        styles.container,
        isMe ? styles.rightContainer : styles.leftContainer,
      ]}
    >
      <Text style={{ color: isMe ? "white" : "black" }}>{message.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: "75%",
  },
  leftContainer: {
    backgroundColor: grey,
    marginLeft: 10,
    marginRight: "auto",
    borderTopLeftRadius: 1.5,
    elevation: 5,
    marginBottom: 20,
  },
  rightContainer: {
    backgroundColor: blue,
    marginLeft: "auto",
    marginRight: 10,
    borderTopRightRadius: 1.5,
    elevation: 3,
    marginBottom: 20,
  },
});

export default Message;
