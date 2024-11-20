import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";

interface TopBarProps {
  bottomTitle: string;
}

const TopBar = ({ bottomTitle }: TopBarProps) => {
  const router = useRouter();
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
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={24} color="#3B3B3B" />
      </TouchableOpacity>

      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 300,
            color: "#3B3B3B",
            letterSpacing: 2,
            textTransform: "uppercase",
            fontFamily: "Brother 1816 Printed",
          }}
        >
          Notfallwissen{" "}
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: "#3B3B3B",
            fontFamily: "Brother 1816 Printed",
          }}
        >
          {bottomTitle}
        </Text>
      </View>

      <TouchableOpacity style={{ opacity: 0 }}>
        <Ionicons name="information-circle" size={40} color="#6d9e31" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          position: "absolute",
          right: 15,
          top: 60,
          borderRadius: 50,
          zIndex: 999,
        }}
      >
        <FontAwesome
          name="circle"
          size={90}
          color="#C2DE4C"
          style={{ paddingHorizontal: 6, zIndex: 999 }}
        />
      </TouchableOpacity>
      <View style={{ position: "absolute", zIndex: 999, right: 55, top: 70 }}>
        <Text
          style={{
            color: "#FFFFFF",
            fontFamily: "Brother 1816 Printed",
            fontWeight: 700,
            fontSize: 52,
          }}
        >
          !
        </Text>
      </View>
    </View>
  );
};

export default TopBar;
