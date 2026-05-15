import {
    ScrollView,
    StyleSheet,
} from "react-native";

import { useLocalSearchParams } from "expo-router";

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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});