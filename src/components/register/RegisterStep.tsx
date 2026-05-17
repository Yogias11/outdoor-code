import {
    StyleSheet,
    Text,
    View,
} from "react-native";

type Props = {
  step: number;
};

export default function RegisterStep({
  step,
}: Props) {
  return (
    <View style={styles.container}>
      {[1, 2, 3].map((item) => {
        const active = step >= item;

        return (
          <View
            key={item}
            style={styles.stepWrapper}
          >
            <View
              style={[
                styles.circle,
                active && styles.activeCircle,
              ]}
            >
              <Text
                style={[
                  styles.number,
                  active && styles.activeNumber,
                ]}
              >
                {item}
              </Text>
            </View>

            <Text style={styles.label}>
              {item === 1
                ? "Data Diri"
                : item === 2
                ? "Kontak"
                : "Pembayaran"}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 24,
  },

  stepWrapper: {
    alignItems: "center",
  },

  circle: {
    width: 40,
    height: 40,
    borderRadius: 999,
    backgroundColor: "#E5E7EB",

    justifyContent: "center",
    alignItems: "center",
  },

  activeCircle: {
    backgroundColor: "#166534",
  },

  number: {
    color: "#6B7280",
    fontWeight: "700",
  },

  activeNumber: {
    color: "#fff",
  },

  label: {
    marginTop: 8,
    fontSize: 12,
    color: "#374151",
  },
});