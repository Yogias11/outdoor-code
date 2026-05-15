import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function DetailSummary() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Ringkasan
      </Text>

      <Text style={styles.description}>
        Pendakian ke Gunung Rinjani
        menawarkan pengalaman luar biasa
        dengan panorama alam terbaik di
        Indonesia.
      </Text>

      <TouchableOpacity>
        <Text style={styles.more}>
          Selengkapnya
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },

  description: {
    marginTop: 16,
    lineHeight: 28,
    color: "#4B5563",
  },

  more: {
    marginTop: 14,
    color: "#166534",
    fontWeight: "700",
  },
});