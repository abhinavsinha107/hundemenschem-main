import React, { useEffect, useState } from "react";
import { View, StatusBar } from "react-native";
import AppBar from "../components/topBar";
import HeroSection from "../components/heroSection";
import ButtonTitles from "../components/buttonTitles";
import SearchResults from "@/components/searchResults";
import { searchContent } from "@/utils/search";

const data = require("../constants/data.json");

type SearchResult = {
  pageIndex: number;
  pageTitle: string;
  subPageIndex: number;
  subPageTitle: string;
  sectionIndex: number;
  sectionTitle: string;
  contentType: string;
  contentText: string;
};

export default function Index() {
  const buttonTitles = [
    "AKUTE SITUATIONEN",
    "VERGIFTUNG & GIFTIGES",
    "SYMPTOME ERKENNEN",
    "KONKRETE MASSNAHMEN",
    "VITALWERTE ÜBERPRÜFEN",
  ];

  const navigationPaths = [
    "/akuteSituationen",
    "/vergiftung&Giftiges",
    "/symptomeErkennen",
    "/konkreteMassnahmem",
    "/vitalwerteUberprufen",
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearchResult = async () => {
    return searchContent(data, searchQuery);
  };

  useEffect(() => {
    if (searchQuery.length >= 1) {
      (async () => {
        const searchResults = await handleSearchResult();
        if (searchResults.length > 0) {
          setResults(searchResults);
        } else if (searchResults.length === 0) {
          setResults([]);
        }
        setShowSearchResults(true);
      })();
    } else {
      setShowSearchResults(false);
    }
  }, [searchQuery]);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      <AppBar bottomTitle="Hauptthemen" />
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isUnterkategorie={false}
      />
      {showSearchResults ? (
        <SearchResults results={results} searchText={searchQuery} />
      ) : (
        <ButtonTitles
          buttonTitles={buttonTitles}
          navigationPaths={navigationPaths}
          isUnterkategorie={false}
        />
      )}
    </View>
  );
}
