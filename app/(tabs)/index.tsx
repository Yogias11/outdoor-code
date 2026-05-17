import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";

import { useMemo, useState } from "react";

import HeroSection from "@/src/components/home/HeroSection";
import PopularSection from "@/src/components/home/PopularSection";
import SearchBar from "@/src/components/home/SearchBar";

import { activities } from "@/src/data/events";

export default function HomeScreen() {
  const [search, setSearch] = useState("");

  const filteredActivities = useMemo(() => {
    return activities.filter((item) => {
      const keyword = search.toLowerCase();

      return (
        item.title
          .toLowerCase()
          .includes(keyword) ||
        item.location
          .toLowerCase()
          .includes(keyword)
      );
    });
  }, [search]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <HeroSection />

        <SearchBar
          value={search}
          onChangeText={setSearch}
        />

        <PopularSection
          data={filteredActivities}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
});