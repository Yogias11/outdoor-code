import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const methods = [
  "BCA Virtual Account",
  "Mandiri Virtual Account",
  "BNI Virtual Account",
  "BRI Virtual Account",
  "E-Wallet",
];

export default function PaymentMethod() {
  return (
    <View>
      <Text style={styles.title}>
        Pilih Metode Pembayaran
      </Text>

      {methods.map((item) => (
        <TouchableOpacity
          key={item}
          style={styles.card}
        >
          <Text style={styles.method}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Bayar Sekarang
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },

  card: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
  },

  method: {
    fontWeight: "600",
  },

  button: {
    marginTop: 30,
    backgroundColor: "#166534",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
});