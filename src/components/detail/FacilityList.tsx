import {
    StyleSheet,
    Text,
    View,
} from "react-native";

const facilities = [
  "Guide",
  "Tenda",
  "Makan 3x Sehari",
  "Porter",
  "P3K",
  "Asuransi",
];

export default function FacilityList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Fasilitas
      </Text>

      <View style={styles.wrapper}>
        {facilities.map((item, index) => (
          <View
            key={index}
            style={styles.badge}
          >
            <Text style={styles.badgeText}>
              {item}
            </Text>
          </View>
        ))}
      </View>

      <View style={{ height: 120 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 28,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 18,
  },

  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  badge: {
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
  },

  badgeText: {
    color: "#374151",
    fontWeight: "600",
  },
});