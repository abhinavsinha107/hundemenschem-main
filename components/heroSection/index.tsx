import React from "react";
import { Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface HeroSectionProps {
  isUnterkategorie: boolean;
  title?: string;
  subTitle?: string;
}

const HeroSection = ({
  isUnterkategorie,
  title,
  subTitle,
}: HeroSectionProps) => {
  return (
    <View style={{ padding: 20 }}>
      {!isUnterkategorie ? (
        <>
          <View style={{ marginBottom: 10, maxWidth: "70%" }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "700",
                lineHeight: 36,
                color: "#C2DE4C",
                fontFamily: "Brother 1816 Printed",
                letterSpacing: 1,
              }}
            >
              ERSTE HILFE BEIM HUND
            </Text>
          </View>
          <View style={{ marginBottom: 40 }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 400,
                lineHeight: 14,
                color: "#666",
                fontFamily: "Brother 1816 Printed",
              }}
            >
              Maßnahmen Symptome und wichtiges Notfallwissen immer griffbereit.
            </Text>
          </View>
        </>
      ) : (
        <View style={{ position: "relative", height: 130 }}>
          {title && (
            <Text
              style={{
                fontFamily: "Arkipelago",
                fontWeight: "400",
                fontSize: 50,
                lineHeight: 90,
                textAlign: "center",
                color: "#C2DE4C",
              }}
            >
              {title}
            </Text>
          )}
          {subTitle && (
            <Text
              style={{
                fontFamily: "Brother 1816 Printed",
                fontSize: 25,
                fontWeight: "500",
                lineHeight: 20,
                textAlign: "center",
                position: "absolute",
                top: "57%",
                left: 0,
                right: 0,
                paddingTop: 5
              }}
            >
              {subTitle}
            </Text>
          )}
        </View>
      )}

      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 9,
          borderWidth: 1,
          borderColor: "#3B3B3B",
          paddingHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 2,
          height: 40,
        }}
      >
        <Ionicons name="search" size={22} color="#3B3B3B" />
        <TextInput
          placeholder="Wonach suchst du?"
          style={{
            fontSize: 16,
            fontWeight: "300",
            padding: 8,
            flex: 1,
            fontFamily: "Brother 1816 Printed",
          }}
        />
      </View>
    </View>
  );
};

export default HeroSection;
