import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

type Props = {
  onNext: () => void;
};

export default function EmergencyForm({
  onNext,
}: Props) {
  return (
    <View>
      <Text style={styles.label}>
        Nama Kontak Darurat
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan nama"
      />

      <Text style={styles.label}>
        Hubungan
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Contoh: Orang Tua"
      />

      <Text style={styles.label}>
        Nomor Telepon
      </Text>

      <TextInput
        style={styles.input}
        placeholder="08xxxxxxxxxx"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onNext}
      >
        <Text style={styles.buttonText}>
          Lanjut Pembayaran
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
    marginTop: 18,
    fontWeight: "600",
  },

  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 54,
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