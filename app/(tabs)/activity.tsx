import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import BottomSheet from "@gorhom/bottom-sheet";

import {
  useMemo,
  useRef,
  useState,
} from "react";

import EventCard from "@/src/components/cards/EventCards";

import FilterBottomSheet from "@/src/components/sheets/FilterBottomSheet";

import { activities } from "@/src/data/events";

export default function ScheduleScreen() {
  const bottomSheetRef =
    useRef<BottomSheet>(null);

  const [search, setSearch] =
    useState("");

  const [filters, setFilters] =
    useState({
      status: "Semua",
      price: "",
    });

  const filteredActivities = useMemo(() => {
    return activities.filter((item) => {
      const keyword =
        search.toLowerCase();

      const matchSearch =
        item.title
          .toLowerCase()
          .includes(keyword) ||
        item.location
          .toLowerCase()
          .includes(keyword);

      const matchStatus =
        filters.status === "Semua"
          ? true
          : item.status ===
            filters.status;

      let matchPrice = true;

      if (filters.price === "Gratis") {
        matchPrice =
          item.priceValue === 0;
      }

      if (filters.price === "< 100K") {
        matchPrice =
          item.priceValue < 100000;
      }

      if (
        filters.price ===
        "100K - 500K"
      ) {
        matchPrice =
          item.priceValue >=
            100000 &&
          item.priceValue <=
            500000;
      }

      if (filters.price === "> 500K") {
        matchPrice =
          item.priceValue > 500000;
      }

      return (
        matchSearch &&
        matchStatus &&
        matchPrice
      );
    });
  }, [search, filters]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Jadwal Kegiatan
        </Text>

        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() =>
            bottomSheetRef.current?.expand()
          }
        >
          <Ionicons
            name="options-outline"
            size={20}
            color="#111827"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchWrapper}>
        <Ionicons
          name="search-outline"
          size={18}
          color="#9CA3AF"
        />

        <TextInput
          placeholder="Cari kegiatan atau lokasi..."
          placeholderTextColor="#9CA3AF"
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {filteredActivities.length ===
      0 ? (
        <View style={styles.empty}>
          <Ionicons
            name="search-outline"
            size={60}
            color="#D1D5DB"
          />

          <Text style={styles.emptyTitle}>
            Tidak ada kegiatan
          </Text>

          <Text style={styles.emptyDesc}>
            Coba gunakan kata kunci atau
            filter lain
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredActivities}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={
            false
          }
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 120,
          }}
          renderItem={({ item }) => (
            <View
              style={{
                marginBottom: 20,
              }}
            >
              <EventCard
                id={item.id}
                title={item.title}
                location={item.location}
                date={item.date}
                price={item.price}
                image={item.image}
              />
            </View>
          )}
        />
      )}

      <FilterBottomSheet
        ref={bottomSheetRef}
        onApply={(selectedFilters) => {
          setFilters(selectedFilters);

          bottomSheetRef.current?.close();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingTop: 60,
  },

  header: {
    paddingHorizontal: 20,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111827",
  },

  filterBtn: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#fff",

    justifyContent: "center",
    alignItems: "center",
  },

  searchWrapper: {
    marginTop: 20,
    marginHorizontal: 20,

    backgroundColor: "#fff",

    borderRadius: 16,

    paddingHorizontal: 16,
    height: 54,

    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    flex: 1,
    marginLeft: 10,
  },

  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },

  emptyTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  emptyDesc: {
    marginTop: 8,
    color: "#6B7280",
    textAlign: "center",
    paddingHorizontal: 40,
  },
});