import React from "react";
import { Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HeroSection = () => {
  return (
    <View style={{ padding: 20 }}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 28, fontWeight: "bold", color: "#6d9e31" }}>
          ERSTE HILFE BEIM HUND
        </Text>
        <Text style={{ fontSize: 12, color: "#666" }}>
          Maßnahmen, Symptome und wichtiges Notfallwissen immer griffbereit.
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          borderWidth: 1,
          paddingHorizontal: 10,
          paddingVertical: 1,
          marginBottom: 20,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 2,
        }}
      >
        <Ionicons name="search" size={20} color="#888" />
        <TextInput
          placeholder="Wonach suchst du?"
          style={{ fontSize: 16, padding: 8, flex: 1 }}
        />
      </View>
    </View>
  );
};

export default HeroSection;
