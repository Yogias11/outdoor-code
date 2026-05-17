import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import EventCard from "@/src/components/cards/EventCards";

import { activities } from "@/src/data/events";

import { useFavoriteStore } from "@/src/store/favoriteStore";

export default function FavoriteScreen() {
  const favorites = useFavoriteStore(
    (state) => state.favorites
  );

  const favoriteEvents = activities.filter(
    (item) =>
      favorites.includes(item.id)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Favorit Saya
      </Text>

      {favoriteEvents.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>
            Belum ada event favorit
          </Text>
        </View>
      ) : (
        <FlatList
          data={favoriteEvents}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            padding: 20,
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    paddingHorizontal: 20,
    color: "#111827",
  },

  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    color: "#6B7280",
    fontSize: 16,
  },
});