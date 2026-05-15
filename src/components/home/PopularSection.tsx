import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from "react-native";

import EventCard from "../cards/EventCards";

type Props = {
  data: any[];
};

export default function PopularSection({
  data,
}: Props) {
  const { width } = useWindowDimensions();

  const isWebGrid = width >= 1024;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Kegiatan Populer
        </Text>

        <TouchableOpacity>
          <Text style={styles.seeAll}>
            Lihat semua
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        key={isWebGrid ? "grid" : "list"}
        keyExtractor={(item) => item.id}
        numColumns={isWebGrid ? 4 : 1}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={
          isWebGrid
            ? {
                justifyContent: "space-between",
              }
            : undefined
        }
        renderItem={({ item }) => (
          <View
            style={{
              width: isWebGrid ? "24%" : "100%",
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

      <View style={{ height: 120 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  seeAll: {
    color: "#166534",
    fontWeight: "600",
  },
});