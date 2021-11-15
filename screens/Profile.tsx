import React from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Profile() {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(`HomeScreen`);
  };
  navigation.setOptions({
    title: "Profile",
    headersStyle: {
      backgroundColor: "white",
    },
    headerTintColor: "black",
    headerLeft: () => (
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={onPress}
      >
        <AntDesign
          name="left"
          size={24}
          color="black"
          style={{ marginRight: 7, marginLeft: -8 }}
        />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <Pressable
        style={{
          flexDirection: "row",
        }}
      >
        <MaterialCommunityIcons name="pencil-outline" size={24} color="black" />
      </Pressable>
    ),
  });
  return (
    <View style={styles.avatarContainer}>
      <Image
        style={styles.avatar}
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
        }}
      />
      <Text style={styles.nameText}>Yuvraj</Text>
      <View style={styles.bottomIcons}>
        <TouchableOpacity style={styles.cameraContainer}>
          <Ionicons name="md-videocam-outline" size={27} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bellContainer}>
          <AntDesign name="bells" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchContainer}>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nameText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 25,
  },
  avatarContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  bottomIcons: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    justifyContent: "center",
    flexDirection: "row",
  },
  avatar: {
    width: 250,
    height: 250,
    borderRadius: 200,
  },
  searchContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#e9e9e9",
    padding: 17,
    marginLeft: 25,
    borderRadius: 20,
  },
  cameraContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#e9e9e9",
    padding: 14.5,
    borderRadius: 20,
  },
  bellContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#e9e9e9",
    padding: 17,
    marginLeft: 25,
    borderRadius: 20,
  },
});
