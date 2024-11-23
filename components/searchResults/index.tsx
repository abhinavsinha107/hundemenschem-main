import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
  searchText: string;
}
const buttonTitles = [
  "AKUTE SITUATIONEN",
  "VERGIFTUNG & GIFTIGES",
  "SYMPTOME ERKENNEN",
  "KONKRETE MASSNAHMEN",
  "VITALWERTE ÜBERPRÜFEN",
];


const SearchResults = ({ results, searchText }: Props) => {
  const handleNavigation = (page: number, index: number)=>{
    console.log("push push push the route")
    router.push({
      pathname: '/dynamicPage',
      params: { index: page, subIndex: index },
    });
  }
  return (
    <ScrollView style={{ paddingHorizontal: 20 }}>
      <Text style={styles.staticText}>Suchbegriff: <Text style={styles.searchedTerm}>{searchText}</Text></Text>
      {results?.map((item: SearchResult, index: number) => {
        return (
          <TouchableOpacity activeOpacity={1} onPress={()=>handleNavigation(item.sectionIndex, item.subPageIndex)} key={index} style={styles.container}>
            <View style={styles.roundedLine} />
            <View style={styles.innerContainer}>
              <Text numberOfLines={1} style={styles.highlightText}>
                {buttonTitles[item?.pageIndex]} | {item.subPageTitle}
              </Text>
              <HighlightText text={item.contentText} searchText={searchText} />
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const HighlightText = ({
  text,
  searchText,
}: {
  text: string;
  searchText: string;
}) => {
  const index = text.toLowerCase().indexOf(searchText.toLowerCase());
  if (index === -1) return <Text>{text}</Text>;

  const before = text.slice(Math.max(0, index - 20), index);
  const match = text.slice(index, index + searchText.length);
  const after = text.slice(
    index + searchText.length,
    index + searchText.length + 20
  );

  return (
    <Text numberOfLines={1}>
      {before.length > 0 && <Text>... {before}</Text>}
      <Text style={styles.searchedTerm}>{match}</Text>
      {after.length > 0 && <Text>{after} ...</Text>}
    </Text>
  );
};

export default SearchResults;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 2,
    backgroundColor: "#ffffff",
  },
  innerContainer: {
    display: "flex",
    paddingTop: 10,
    paddingBottom: 22,
  },
  highlightText: {
    color: "#899E33",
    fontWeight: "bold",
  },
  searchedTerm: {
    color: "black",
    fontWeight: "bold",
  },
  roundedLine: {
    height: 2,
    backgroundColor: "#899E33", 
    borderRadius: 15,
    width: "25%",
  },
  staticText: {
    marginBottom: 15,
    paddingHorizontal: 2,
  },
});
