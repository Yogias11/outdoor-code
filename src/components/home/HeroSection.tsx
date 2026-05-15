import { StyleSheet, Text, View } from "react-native";
import HomeHeader from "./HomeReader";

export default function HeroSection() {
  return (
    <View style={styles.container}>
      <HomeHeader />

      <View style={styles.content}>
        <Text style={styles.title}>
          Jelajahi Alam,{"\n"}
          Temukan Dirimu
        </Text>

        <Text style={styles.subtitle}>
          Ratusan kegiatan outdoor terbaik di seluruh Indonesia
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#14532D",
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  content: {
    marginTop: 40,
  },

  title: {
    fontSize: 34,
    color: "#fff",
    fontWeight: "800",
    lineHeight: 42,
  },

  subtitle: {
    marginTop: 14,
    color: "#D1D5DB",
    fontSize: 15,
    lineHeight: 22,
  },
});