import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useLanguageContext } from "../../contexts/LanguageContext";

export default function LanguagePicker() {
  const { t, locale, setLocale, dir } = useLanguageContext();
  return (
    <View
      style={{
        flexDirection: dir === "rtl" ? "row-reverse" : "row",
        gap: 10,
        padding: 15,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text style={[styles.textMedium, { flex: 1 }]}>
        {t?.("Change The Language")}
      </Text>
      <Picker
        selectedValue={locale}
        style={{
          flex: 1,
        }}
        mode="dialog"
        onValueChange={(itemValue) => setLocale?.(itemValue)}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Arabic" value="ar" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  textMedium: {
    fontSize: 20,
  },
});
