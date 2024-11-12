import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  StatusBar,
  Pressable,
  TouchableOpacity,
} from "react-native";
import AppBar from "../components/topBar";
import HeroSection from "@/components/heroSection";
import { MaterialIcons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";

const data = require("../constants/data.json");

export default function Index() {
  const page = data.pages[0];

  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      <AppBar bottomTitle="Unterkategorie" />
      <HeroSection isUnterkategorie={false} isDynamicPage={true} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: "#E9E8E8", paddingVertical: 10 }}>
          <Image
            source={require("@/assets/images/cross.png")}
            style={{ alignSelf: "center" }}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.pageTitle}>{page.title}</Text>
          {page.sections.map((section: any, index: any) => (
            <View key={index} style={styles.sectionContainer}>
              <Pressable
                style={styles.header}
                onPress={() => toggleExpand(section.id)}
              >
                <View style={styles.topHeader}>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <Text style={styles.title}>
                      {String.fromCharCode(64 + index + 1)}.
                    </Text>
                    <Text style={{ ...styles.title, marginLeft: "22%" }}>
                      {section.title}
                    </Text>
                  </View>
                  <MaterialIcons
                    name={
                      expandedItems[section.id] ? "expand-less" : "expand-more"
                    }
                    size={24}
                    color="black"
                  />
                </View>
                {expandedItems[section.id] &&
                  section.content.map((item: any, idx: any) => {
                    switch (item.type) {
                      case "bullet":
                        return (
                          <View key={idx} style={styles.bulletContainer}>
                            <Feather name="check" size={24} color="#899E33" />
                            <Text style={styles.bulletPoint}>
                              {item.content}
                            </Text>
                          </View>
                        );
                      case "highlightedText":
                        return (
                          <Text key={idx} style={styles.highlightedText}>
                            {item.text}
                          </Text>
                        );
                      case "buttonText":
                        return (
                          <View key={idx} style={styles.buttonText}>
                            <Text style={styles.buttonTextContent}>
                              {item.content}
                            </Text>
                          </View>
                        );
                      default:
                        return null;
                    }
                  })}
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    marginTop: 20,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Brother 1816 Printed",
    letterSpacing: 1,
    color: "#3B3B3B",
    textTransform: "uppercase",
    marginBottom: 20,
  },
  sectionContainer: {
    borderWidth: 1,
    borderColor: "#3B3B3B",
    borderRadius: 14,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  header: {
    display: "flex",
    flexDirection: "column",
  },
  topHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Brother 1816 Printed",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  bulletContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  bulletPoint: {
    flex: 1,
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "Brother 1816 Printed",
    color: "#3B3B3B",
    lineHeight: 23,
  },
  highlightedText: {
    fontSize: 24,
    fontFamily: "Brother 1816 Printed",
    fontWeight: "500",
    color: "#899E33",
    marginVertical: 15,
  },
  buttonText: {
    backgroundColor: "#3B3B3B",
    paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 100,
    height: 40,
  },
  buttonTextContent: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Brother 1816 Printed",
    textAlign: "center",
    color: "#FFFFFF",
  },
});
