import { light } from "@mui/material/styles/createPalette";
import React, { Component, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      console.warn("I'll Add This Feature Later Ok!");
    }
  };

  const onPlusClick = () => {
    console.warn("I'll Add This Feature Later Ok!");
  };
  const sendMessage = () => {
    console.warn("Sending: ", message, "to database");

    setMessage("");
  };

  console.log(message);

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <View style={styles.inputContainer}>
        <Pressable>
          <SimpleLineIcons
            name="emotsmile"
            size={25}
            color="#595959"
            style={styles.icon}
          />
        </Pressable>
        <TextInput
          style={styles.input}
          placeholder="Signal message..."
          value={message}
          onChangeText={setMessage}
        />
        {message ? null : (
          <EvilIcons
            name="camera"
            size={37}
            color="#595959"
            style={styles.icon}
          />
        )}
        {message ? (
          <Pressable onPress={onPlusClick}>
            <AntDesign name="plus" size={29} color="#595959" />
          </Pressable>
        ) : (
          <SimpleLineIcons
            name="microphone"
            size={25}
            color="#595959"
            style={styles.icon}
          />
        )}
      </View>
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        {message ? (
          <MaterialCommunityIcons name="send-lock" size={25} color="white" />
        ) : (
          <AntDesign name="plus" style={styles.button} />
        )}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    padding: 10,
  },
  inputContainer: {
    backgroundColor: "#e9e9e9",
    flex: 1,
    marginRight: 10,
    borderRadius: 50,
    borderColor: "grey",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    elevation: 8,
    marginTop: -2,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#3777f0",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
  button: {
    color: "white",
    fontSize: 27,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
    ...Platform.select({
      web: {
        outlineWidth: 0,
      },
    }),
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default MessageInput;
