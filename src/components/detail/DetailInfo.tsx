import {
    StyleSheet,
    Text,
    View,
} from "react-native";

import {
    Ionicons,
} from "@expo/vector-icons";

type Props = {
  event: any;
};

export default function DetailInfo({
  event,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {event.title}
      </Text>

      <Text style={styles.location}>
        📍 {event.location}
      </Text>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#166534"
          />

          <Text style={styles.statTitle}>
            14 - 17
          </Text>

          <Text style={styles.statSub}>
            Juni 2026
          </Text>
        </View>

        <View style={styles.statItem}>
          <Ionicons
            name="barbell-outline"
            size={20}
            color="#166534"
          />

          <Text style={styles.statTitle}>
            4 Hari
          </Text>

          <Text style={styles.statSub}>
            3 Malam
          </Text>
        </View>

        <View style={styles.statItem}>
          <Ionicons
            name="people-outline"
            size={20}
            color="#166534"
          />

          <Text style={styles.statTitle}>
            12 / 20
          </Text>

          <Text style={styles.statSub}>
            Peserta
          </Text>
        </View>

        <View style={styles.statItem}>
          <Ionicons
            name="person-outline"
            size={20}
            color="#166534"
          />

          <Text style={styles.statTitle}>
            Sedang
          </Text>

          <Text style={styles.statSub}>
            Level
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#111827",
  },

  location: {
    marginTop: 8,
    color: "#6B7280",
    fontSize: 16,
  },

  stats: {
    marginTop: 30,

    flexDirection: "row",
    justifyContent: "space-between",
  },

  statItem: {
    alignItems: "center",
    flex: 1,
  },

  statTitle: {
    marginTop: 10,
    fontWeight: "700",
    color: "#111827",
  },

  statSub: {
    marginTop: 4,
    color: "#6B7280",
    fontSize: 12,
    textAlign: "center",
  },
});