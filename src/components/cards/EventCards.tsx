import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { router } from "expo-router";

type EventCardProps = {
  id: string;
  title: string;
  location: string;
  date: string;
  price: string;
  image: string;
  status?: string;
};

export default function EventCard({
  id,
  title,
  location,
  date,
  price,
  image,
  status = "OPEN",
}: EventCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={() =>
        router.push({
            pathname: "/event/[id]",
            params: { id },
        })
    }
    >
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {status}
          </Text>
        </View>

        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.location}>
          {location}
        </Text>

        <Text style={styles.date}>
          {date}
        </Text>

        <Text style={styles.price}>
          {price}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 200,
  },

  content: {
    padding: 18,
  },

  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 14,
  },

  badgeText: {
    color: "#166534",
    fontWeight: "700",
    fontSize: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  location: {
    marginTop: 6,
    color: "#6B7280",
  },

  date: {
    marginTop: 10,
    color: "#6B7280",
  },

  price: {
    marginTop: 14,
    fontSize: 20,
    fontWeight: "800",
    color: "#166534",
  },
});