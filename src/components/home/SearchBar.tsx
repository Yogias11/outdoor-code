import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchBar({
  value,
  onChangeText,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TextInput
          placeholder="Cari kegiatan, lokasi, atau kata kunci..."
          placeholderTextColor="#9CA3AF"
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
        />

        <TouchableOpacity style={styles.button}>
          <Ionicons
            name="search"
            size={20}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: -22,
    paddingHorizontal: 20,
  },

  container: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 14,
  },

  button: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: "#166534",
    justifyContent: "center",
    alignItems: "center",
  },
});