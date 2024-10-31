import React from "react";
import { Stack } from "expo-router";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Arkipelago: require("../assets/fonts/Arkipelago 1.003.otf"),
  });

  if (!fontsLoaded) {
    if (!fontsLoaded) {
      // Display loading spinner while fonts are loading
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="akuteSituationen"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="vergiftung&Giftiges"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="symptomeErkennen"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="konkreteMassnahmem"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="vitalwerteUberprufen"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
