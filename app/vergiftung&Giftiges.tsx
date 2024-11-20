import React from "react";
import { View, StatusBar } from "react-native";
import AppBar from "../components/topBar";
import HeroSection from "../components/heroSection";
import ButtonTitles from "../components/buttonTitles";
import { useLocalSearchParams } from "expo-router";

export default function Index() {
  const { page } = useLocalSearchParams();

  const buttonTitles = [
    "Vergiftung Allgemein",
    "Blaukorn-Vergiftung",
    "Rattengift",
    "Schneckenkorn-Vergiftung",
    "Schlangenbiss",
    "Schokoladen-vergiftung",
    "Giftige Pflanzen",
    "Giftige Lebensmittel",
  ];

  const navigationPaths = [
    "/dynamicPage",
    "/dynamicPage",
    "/dynamicPage",
    "/dynamicPage",
    "/dynamicPage",
    "/dynamicPage",
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      <AppBar bottomTitle="Unterkategorie" />
      <HeroSection
        isUnterkategorie={true}
        title="Vergiftung"
        subTitle="& Giftiges."
      />
      <ButtonTitles buttonTitles={buttonTitles} isUnterkategorie={true} navigationPaths={navigationPaths} page={page} />
    </View>
  );
}
