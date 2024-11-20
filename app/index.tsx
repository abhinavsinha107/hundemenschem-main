import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import AppBar from "../components/topBar";
import HeroSection from "../components/heroSection";
import ButtonTitles from "../components/buttonTitles";
import SearchResults from "@/components/searchResults";

const data = require("../constants/data.json");

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

  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);


  // const searchInJson = (query: string) => {
  //   const filteredResults: any = [];

  //   const recursiveSearch = (section: any, pageIndex: any, subPageIndex: any) => {
  //     sections && sections.forEach((item: any) => {
  //       // Check if the content matches the search query
  //       if (item.content && item.content.toLowerCase().includes(query.toLowerCase())) {
  //         filteredResults.push({
  //           pageIndex,
  //           subPageIndex,
  //           title: item.title || 'No Title',
  //           content: item.content
  //         });
  //       }

  //       // If the item is a subTopic, recursively search within its content
  //       if (item.type === 'subTopic' && Array.isArray(item.content)) {
  //         recursiveSearch(item.content, pageIndex, subPageIndex);
  //       }
  //     });
  //   };

  //   // Loop through pages and subpages
  //   data.pages.forEach((page: any, pageIndex: any) => {
  //     page.subPages.forEach((subPage: any, subPageIndex: any) => {
  //       // Perform the search on the sections of the subPage
  //       recursiveSearch(subPage.section, pageIndex, subPageIndex);
  //     });
  //   });

  //   setResults(filteredResults);
  // };

  // console.log(searchInJson('keine Atmung'))

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      <AppBar bottomTitle="Hauptthemen" />
      <HeroSection isUnterkategorie={false} />
      {showSearchResults ? <SearchResults /> : <ButtonTitles
        buttonTitles={buttonTitles}
        navigationPaths={navigationPaths}
        isUnterkategorie={false}
      />}

    </View>
  );
}
