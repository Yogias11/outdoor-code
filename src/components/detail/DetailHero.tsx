import {
    Image,
    StyleSheet,
    Text,
    View,
} from "react-native";

type Props = {
  image: string;
};

export default function DetailHero({
  image,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <Image
        source={{ uri: image }}
        style={styles.image}
      />

      <View style={styles.badge}>
        <Text style={styles.badgeText}>
          1/8
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },

  image: {
    width: "100%",
    height: 250,
    borderRadius: 24,
  },

  badge: {
    position: "absolute",
    bottom: 14,
    right: 34,

    backgroundColor: "rgba(0,0,0,0.6)",

    paddingHorizontal: 10,
    paddingVertical: 6,

    borderRadius: 999,
  },

  badgeText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },
});