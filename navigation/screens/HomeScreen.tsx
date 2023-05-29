import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLanguageContext } from "../../contexts/LanguageContext";
import Header from "../../components/common/Header";

export default function HomeScreen() {
  const { t, locale, setLocale } = useLanguageContext();
  return (
    <View style={[styles.container]}>
      <Header height={200}>
        <Header.Start>
          <TouchableOpacity activeOpacity={0.5}>
            <Image source={require("../../assets/search.png")} />
          </TouchableOpacity>
        </Header.Start>
        <Header.Middle>
          <Image source={require("../../assets/main-logo.png")} />
        </Header.Middle>
        <Header.End>
          <View style={[styles.flexRow]}>
            <TouchableOpacity activeOpacity={0.5}>
              <Image source={require("../../assets/heart.png")} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <Image source={require("../../assets/notification-bell.png")} />
            </TouchableOpacity>
          </View>
        </Header.End>
      </Header>
      <Text>{t?.("title")}</Text>
      <Text>{t?.("description")}</Text>
      <Button
        onPress={() =>
          locale === "en" ? setLocale?.("ar") : setLocale?.("en")
        }
        title={`Change me to ${locale === "en" ? "ar" : "en"} `}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  flexRow: {
    flexDirection: "row",
    gap: 10,
  },
});
