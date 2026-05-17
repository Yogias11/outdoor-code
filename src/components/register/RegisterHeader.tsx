import {
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";

import {
    Ionicons,
} from "@expo/vector-icons";

import { router } from "expo-router";

export default function RegisterHeader() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.back()}
      >
        <Ionicons
          name="chevron-back"
          size={24}
          color="#111827"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});