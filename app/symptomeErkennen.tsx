import React from "react";
import { View, StatusBar } from "react-native";
import AppBar from "../components/topBar";
import HeroSection from "../components/heroSection";
import ButtonTitles from "../components/buttonTitles";
import { useLocalSearchParams } from "expo-router";

export default function Index() {
  const { page } = useLocalSearchParams();

  const buttonTitles = [
    "Unterkategorie",
    "Unterkategorie",
    "Unterkategorie",
    "Unterkategorie",
    "Unterkategorie",
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      <AppBar bottomTitle="Unterkategorie" />
      <HeroSection
        isUnterkategorie={true}
        title="Symptome"
        subTitle="erkennen."
      />
      <ButtonTitles buttonTitles={buttonTitles} isUnterkategorie={true} />
    </View>
  );
}
