import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { router, useLocalSearchParams } from "expo-router";

import { useState } from "react";

import { activities } from "@/src/data/events";

const paymentMethods = [
  {
    id: "bca",
    name: "BCA Virtual Account",
    desc: "Virtual Account",
    icon: "card-outline",
  },

  {
    id: "mandiri",
    name: "Mandiri Virtual Account",
    desc: "Virtual Account",
    icon: "wallet-outline",
  },

  {
    id: "bni",
    name: "BNI Virtual Account",
    desc: "Virtual Account",
    icon: "cash-outline",
  },

  {
    id: "bri",
    name: "BRI Virtual Account",
    desc: "Virtual Account",
    icon: "business-outline",
  },

  {
    id: "ewallet",
    name: "E-Wallet",
    desc: "OVO, GoPay, DANA, ShopeePay",
    icon: "phone-portrait-outline",
  },
];

export default function PaymentScreen() {
  const { id } =
    useLocalSearchParams();

  const event = activities.find(
    (item) => item.id === id
  );

  const [selectedPayment, setSelectedPayment] =
    useState("bca");

  if (!event) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
          >
            <Ionicons
              name="chevron-back"
              size={26}
              color="#111827"
            />
          </TouchableOpacity>
        </View>

        {/* SUMMARY */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Ringkasan Pesanan
          </Text>

          <View style={styles.summaryCard}>
            <Image
              source={{
                uri: event.image,
              }}
              style={styles.image}
            />

            <View
              style={{
                flex: 1,
              }}
            >
              <Text
                style={styles.eventTitle}
              >
                {event.title}
              </Text>

              <Text style={styles.info}>
                {event.date}
              </Text>

              <Text style={styles.info}>
                1 Peserta
              </Text>
            </View>

            <Text style={styles.price}>
              {event.price}
            </Text>
          </View>
        </View>

        {/* PAYMENT */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Pilih Metode Pembayaran
          </Text>

          {paymentMethods.map(
            (item) => {
              const active =
                selectedPayment ===
                item.id;

              return (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.paymentCard,
                    active &&
                      styles.activePaymentCard,
                  ]}
                  onPress={() =>
                    setSelectedPayment(
                      item.id
                    )
                  }
                >
                  <View
                    style={
                      styles.paymentLeft
                    }
                  >
                    <View
                      style={
                        styles.iconWrapper
                      }
                    >
                      <Ionicons
                        name={
                          item.icon as any
                        }
                        size={24}
                        color="#166534"
                      />
                    </View>

                    <View>
                      <Text
                        style={
                          styles.paymentTitle
                        }
                      >
                        {item.name}
                      </Text>

                      <Text
                        style={
                          styles.paymentDesc
                        }
                      >
                        {item.desc}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={[
                      styles.radio,
                      active &&
                        styles.activeRadio,
                    ]}
                  />
                </TouchableOpacity>
              );
            }
          )}
        </View>
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>
            Total Pembayaran
          </Text>

          <Text style={styles.totalPrice}>
            {event.price}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.payButton}
        >
          <Text style={styles.payText}>
            Bayar Sekarang
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  section: {
    paddingHorizontal: 20,
    marginTop: 28,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 18,
  },

  summaryCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 14,

    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 74,
    height: 74,
    borderRadius: 14,
    marginRight: 14,
  },

  eventTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 6,
  },

  info: {
    color: "#6B7280",
    marginBottom: 4,
  },

  price: {
    fontWeight: "700",
    fontSize: 16,
    color: "#111827",
  },

  paymentCard: {
    backgroundColor: "#fff",

    borderRadius: 18,

    padding: 18,

    marginBottom: 14,

    borderWidth: 1,
    borderColor: "#E5E7EB",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  activePaymentCard: {
    borderColor: "#166534",
  },

  paymentLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconWrapper: {
    width: 52,
    height: 52,

    borderRadius: 14,

    backgroundColor: "#ECFDF5",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 14,
  },

  paymentTitle: {
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },

  paymentDesc: {
    color: "#6B7280",
    fontSize: 13,
  },

  radio: {
    width: 22,
    height: 22,

    borderRadius: 999,

    borderWidth: 2,
    borderColor: "#D1D5DB",
  },

  activeRadio: {
    borderColor: "#166534",
    backgroundColor: "#166534",
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: "#fff",

    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 30,

    borderTopWidth: 1,
    borderColor: "#F3F4F6",
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  totalLabel: {
    color: "#6B7280",
    fontSize: 15,
  },

  totalPrice: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111827",
  },

  payButton: {
    backgroundColor: "#166534",

    height: 56,

    borderRadius: 18,

    justifyContent: "center",
    alignItems: "center",
  },

  payText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});