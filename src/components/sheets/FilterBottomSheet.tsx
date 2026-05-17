import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import BottomSheet, {
    BottomSheetView,
} from "@gorhom/bottom-sheet";

import {
    forwardRef,
    useMemo,
    useState,
} from "react";

const statusOptions = [
  "Semua",
  "Open",
  "Closed",
];

const priceOptions = [
  "Gratis",
  "< 100K",
  "100K - 500K",
  "> 500K",
];

type Props = {
  onApply: (filters: {
    status: string;
    price: string;
  }) => void;
};

const FilterBottomSheet = forwardRef<
  BottomSheet,
  Props
>(({ onApply }, ref) => {
  const snapPoints = useMemo(
    () => ["60%"],
    []
  );

  const [status, setStatus] =
    useState("Semua");

  const [price, setPrice] =
    useState("");

  const handleReset = () => {
    const resetData = {
      status: "Semua",
      price: "",
    };

    setStatus("Semua");
    setPrice("");

    onApply(resetData);
  };

  const handleApply = () => {
    onApply({
      status,
      price,
    });
  };

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
    >
      <BottomSheetView
        style={styles.content}
      >
        <Text style={styles.title}>
          Filter Kegiatan
        </Text>

        {/* STATUS */}
        <Text style={styles.label}>
          Status
        </Text>

        <View style={styles.row}>
          {statusOptions.map((item) => {
            const active =
              status === item;

            return (
              <TouchableOpacity
                key={item}
                style={[
                  styles.chip,
                  active &&
                    styles.activeChip,
                ]}
                onPress={() =>
                  setStatus(item)
                }
              >
                <Text
                  style={[
                    styles.chipText,
                    active &&
                      styles.activeChipText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* PRICE */}
        <Text style={styles.label}>
          Harga
        </Text>

        <View style={styles.row}>
          {priceOptions.map((item) => {
            const active =
              price === item;

            return (
              <TouchableOpacity
                key={item}
                style={[
                  styles.chip,
                  active &&
                    styles.activeChip,
                ]}
                onPress={() =>
                  setPrice(item)
                }
              >
                <Text
                  style={[
                    styles.chipText,
                    active &&
                      styles.activeChipText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.resetButton}
            onPress={handleReset}
          >
            <Text style={styles.resetText}>
              Reset
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.applyButton}
            onPress={handleApply}
          >
            <Text style={styles.applyText}>
              Terapkan
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
});

export default FilterBottomSheet;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 24,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 28,
  },

  label: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 14,
    marginTop: 10,
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },

  chip: {
    paddingHorizontal: 16,
    paddingVertical: 12,

    borderRadius: 999,

    backgroundColor: "#F3F4F6",

    marginRight: 10,
    marginBottom: 10,
  },

  activeChip: {
    backgroundColor: "#166534",
  },

  chipText: {
    color: "#111827",
    fontWeight: "600",
  },

  activeChipText: {
    color: "#fff",
  },

  footer: {
    flexDirection: "row",
    marginTop: 30,
  },

  resetButton: {
    flex: 1,

    borderWidth: 1,
    borderColor: "#D1D5DB",

    paddingVertical: 18,

    borderRadius: 16,

    alignItems: "center",

    marginRight: 12,
  },

  resetText: {
    color: "#111827",
    fontWeight: "700",
  },

  applyButton: {
    flex: 1,

    backgroundColor: "#166534",

    paddingVertical: 18,

    borderRadius: 16,

    alignItems: "center",
  },

  applyText: {
    color: "#fff",
    fontWeight: "700",
  },
});