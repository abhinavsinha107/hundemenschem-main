import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

interface ButtonTitlesProps {
  buttonTitles: Array<string>;
}

const ButtonTitles = ({ buttonTitles }: ButtonTitlesProps) => {
  return (
    <View style={{ padding: 20 }}>
      <ScrollView>
        {buttonTitles.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: 15,
              marginBottom: 15,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 5,
              elevation: 2,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>{item}</Text>
            <Text style={{ fontSize: 20, color: "#6d9e31" }}>›</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ButtonTitles;
