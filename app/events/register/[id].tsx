import {
    SafeAreaView,
    StyleSheet,
    View
} from "react-native";

import { useState } from "react";

import RegisterHeader from "@/src/components/register/RegisterHeader";
import RegisterStep from "@/src/components/register/RegisterStep";

import EmergencyForm from "@/src/components/register/EmergencyForm";
import PaymentMethod from "@/src/components/register/PaymentMethod";
import PersonalForm from "@/src/components/register/PersonalForm";

export default function RegisterScreen() {
  const [step, setStep] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <RegisterHeader />

      <RegisterStep step={step} />

      <View style={styles.content}>
        {step === 1 && (
          <PersonalForm
            onNext={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <EmergencyForm
            onNext={() => setStep(3)}
          />
        )}

        {step === 3 && <PaymentMethod />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});