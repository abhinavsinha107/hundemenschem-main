import React, { useEffect, useState } from "react";
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

  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  type ContentItem = {
    type: string;
    content?: string | ContentItem[] | undefined;
    text?: string;
  };

  type Section = {
    id: string;
    title: string;
    content: ContentItem[];
  };

  type SubPage = {
    title: string;
    sections: Section[];
  };

  type Page = {
    title: string;
    subPages: SubPage[];
  };

  type DataStructure = {
    pages: Page[];
  };

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

  function searchContent(data: DataStructure, term: string): SearchResult[] {
    if (term.length < 1) return [];

    const results: SearchResult[] = [];
    const seenContent = new Set<string>();

    function recursiveSearch(pages: Page[], pageIndex: number = 0): void {
      pages?.forEach((page, pageIndex) => {
        page.subPages?.forEach((subPage, subPageIndex) => {
          subPage.sections?.forEach((section, sectionIndex) => {
            section.content?.forEach((contentItem) => {
              if (typeof contentItem === "object") {
                const textContent =
                  contentItem.text ||
                  (typeof contentItem.content === "string"
                    ? contentItem.content
                    : "");

                const lowerCaseContent = textContent.toLowerCase();
                if (
                  lowerCaseContent.includes(term.toLowerCase()) &&
                  !seenContent.has(lowerCaseContent)
                ) {
                  seenContent.add(lowerCaseContent);
                  results.push({
                    pageIndex,
                    pageTitle: page.title,
                    subPageIndex,
                    subPageTitle: subPage.title,
                    sectionIndex,
                    sectionTitle: section.title,
                    contentType: contentItem.type,
                    contentText: textContent,
                  });
                }

                if (
                  contentItem.type === "subTopic" &&
                  Array.isArray(contentItem.content)
                ) {
                  recursiveSearch(
                    [
                      {
                        title: subPage.title,
                        subPages: contentItem.content as any,
                      },
                    ],
                    pageIndex
                  );
                }
              }
            });
          });
        });
      });
    }

    recursiveSearch(data.pages);

    return results;
  }

  // useEffect(() => {
  //   if (searchResults.length > 0) {
  //     setResults(searchResults);
  //     // setShowSearchResults(true);
  //   }
  // }, []);

  const handleSearchResult = async () => {
    return searchContent(data, searchQuery);
  };

  useEffect(() => {
    if (searchQuery.length > 1) {
      (async () => {
        const searchResults = await handleSearchResult();
        if (searchResults.length > 0) {
          setResults(searchResults);
          setShowSearchResults(true);
          // console.log(searchResults, "Results Found");
        } else {
          setShowSearchResults(false);
        }
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
