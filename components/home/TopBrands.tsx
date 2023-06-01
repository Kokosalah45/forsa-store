import { Text, TouchableOpacity, View } from "react-native";
import { useLanguageContext } from "../../contexts/LanguageContext";
import { useTranslation } from "react-i18next";

const TopBrands = () => {
  const {
    t,
    i18n: { dir },
  } = useTranslation();
  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: dir() === "rtl" ? "row-reverse" : "row",
        marginBottom: 5,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
        }}
      >
        {t?.("Top brands in retail")}
      </Text>
      <TouchableOpacity>
        <Text> {t?.("View All")}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopBrands;
