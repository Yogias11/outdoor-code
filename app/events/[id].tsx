import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import { router, useLocalSearchParams } from "expo-router";

import { activities } from "@/src/data/events";

import DetailHeader from "@/src/components/detail/DetailHeader";
import DetailHero from "@/src/components/detail/DetailHero";
import DetailInfo from "@/src/components/detail/DetailInfo";
import DetailSummary from "@/src/components/detail/DetailSummary";
import FacilityList from "@/src/components/detail/FacilityList";

export default function EventDetailScreen() {
  const { id } = useLocalSearchParams();

  const event = activities.find(
    (item) => item.id === id
  );

  if (!event) return null;

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <DetailHeader />

      <DetailHero image={event.image} />

      <DetailInfo event={event} />

      <DetailSummary />

      <FacilityList />

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push({
            pathname: "/events/register/[id]",
            params: {
              id: event.id,
            },
          })
        }
      >
        <Text style={styles.buttonText}>
          Daftar Event
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 40,
    backgroundColor: "#166534",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});