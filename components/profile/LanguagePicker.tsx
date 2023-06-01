import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useTranslation } from "react-i18next";

export default function LanguagePicker() {
  const { t, i18n } = useTranslation();
  return (
    <View
      style={{
        flexDirection: i18n.dir() === "rtl" ? "row-reverse" : "row",
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
        selectedValue={i18n.language}
        style={{
          flex: 1,
        }}
        mode="dialog"
        onValueChange={(itemValue) => i18n.changeLanguage(itemValue)}
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
