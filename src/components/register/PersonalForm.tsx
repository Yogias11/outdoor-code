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

export default function PersonalForm({
  onNext,
}: Props) {
  return (
    <View>
      <Text style={styles.label}>
        Nama Lengkap
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan nama lengkap"
      />

      <Text style={styles.label}>
        Tanggal Lahir
      </Text>

      <TextInput
        style={styles.input}
        placeholder="DD/MM/YYYY"
      />

      <Text style={styles.label}>
        Jenis Kelamin
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Pilih jenis kelamin"
      />

      <Text style={styles.label}>
        No. KTP
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan nomor KTP"
      />

      <Text style={styles.label}>
        Alamat
      </Text>

      <TextInput
        multiline
        numberOfLines={4}
        style={[styles.input, styles.textarea]}
        placeholder="Masukkan alamat lengkap"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onNext}
      >
        <Text style={styles.buttonText}>
          Lanjutkan
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

  textarea: {
    height: 120,
    textAlignVertical: "top",
    paddingTop: 16,
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