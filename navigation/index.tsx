import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, useWindowDimensions } from "react-native";

import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

import ChatRoomScreen from "../screens/ChatRoomScreen";
import HomeScreen from "../screens/HomeScreen";
import { Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Signal",
          headerTitle: HomeHeader,
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{
          headerTitle: ChatRoomHeader,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

const ChatRoomHeader = (props) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: width - 50,
        padding: 10,
        marginLeft: -25,
      }}
    >
      <Image
        source={{
          uri: "https://lh3.googleusercontent.com/ogw/ADea4I4MEvhya1pSoZN-3NAh4LhMoHZe4wMeLzfYZosnpg=s83-c-mo",
        }}
        style={{
          height: 30,
          width: 30,
          borderRadius: 30,
        }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 19,
          justifyContent: "center",
        }}
      >{props.children}</Text>
      <View
        style={{
          flexDirection: "row",
          right: 10,
        }}
      >
        <AntDesign
          name="videocamera"
          size={24}
          color="black"
          style={{ right: 10 }}
        />
        <Feather
          name="more-vertical"
          size={24}
          color="black"
          style={{ marginRight: 15, left: 20 }}
        />
      </View>
    </View>
  );
};

const HomeHeader = (props) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width,
        padding: 10,
      }}
    >
      <Image
        source={{
          uri: "https://lh3.googleusercontent.com/ogw/ADea4I4MEvhya1pSoZN-3NAh4LhMoHZe4wMeLzfYZosnpg=s83-c-mo",
        }}
        style={{
          height: 30,
          width: 30,
          borderRadius: 30,
        }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 19,
          justifyContent: "center",
        }}
      >
        Signal
      </Text>
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
        <Feather
          name="more-vertical"
          size={24}
          color="black"
          style={{ marginRight: 15 }}
        />
      </View>
    </View>
  );
};
