import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

interface SearchResult {
  pageIndex: number;
  pageTitle: string;
  subPageIndex: number;
  subPageTitle: string;
  sectionIndex: number;
  sectionTitle: string;
  contentType: string;
  contentText: string;
}

interface Props {
  results: SearchResult[];
}

const SearchResults = ({ results }: Props) => {
  console.log(results, "------->");
  return (
    <ScrollView style={{ paddingHorizontal: 20 }}>
      {results?.map((item: SearchResult, index: number) => {
        return (
          <View key={index} style={styles.container}>
            <View style={styles.innerContainer}>
              <Text style={styles.highlightText}>{item?.subPageTitle} |  {item.sectionTitle}</Text>
              <Text>{item?.contentText}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default SearchResults;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    marginTop: 20,
    marginBottom: 20,
  },
  innerContainer: {
    display: "flex",
  },
  highlightText: {
    color: "#899E33",
    fontWeight: "bold",
  },
});
