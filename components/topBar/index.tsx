import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TopBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 15,
        borderBottomWidth: 1,
        borderColor: "#eee",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        paddingTop: 50,
        position: "relative",
      }}
    >
      <TouchableOpacity>
        <Ionicons name="arrow-back" size={24} color="#6d9e31" />
      </TouchableOpacity>

      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#666" }}>
          NOTFALLWISSEN{" "}
        </Text>
        <Text style={{ fontSize: 12, color: "#999" }}>Hauptthemen</Text>
      </View>

      <TouchableOpacity style={{ opacity: 0 }}>
        <Ionicons name="information-circle" size={20} color="#6d9e31" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          position: "absolute",
          right: 15,
          top: 60,
          borderRadius: 50,
          backgroundColor: "white",
        }}
      >
        <Ionicons name="information-circle" size={90} color="#6d9e31" />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
