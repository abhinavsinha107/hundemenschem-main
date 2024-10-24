import React from "react";
import { View, StatusBar } from "react-native";
import AppBar from "../components/topBar";
import HeroSection from "../components/heroSection";
import ButtonTitles from "../components/buttonTitles";

export default function Index() {
  const buttonTitles = [
    "AKUTE SITUATIONEN",
    "VERGIFTUNG & GIFTIGES",
    "SYMPTOME ERKENNEN",
    "KONKRETE MASSNAHMEN",
    "VITALWERTE ÜBERPRÜFEN",
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      <AppBar />
      <HeroSection />
      <ButtonTitles buttonTitles={buttonTitles} />
    </View>
  );
}
