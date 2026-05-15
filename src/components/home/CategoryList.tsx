import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const categories = [
  "Semua",
  "Gunung",
  "Air",
  "Workshop",
  "Komunitas",
];

export default function CategoryList() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              index === 0 && styles.activeButton,
            ]}
          >
            <Text
              style={[
                styles.text,
                index === 0 && styles.activeText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 20,
  },

  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 16,
    marginRight: 12,
  },

  activeButton: {
    backgroundColor: "#166534",
  },

  text: {
    color: "#374151",
    fontWeight: "600",
  },

  activeText: {
    color: "#fff",
  },
});