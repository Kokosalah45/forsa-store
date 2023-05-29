import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/common/Header";
import { TouchableOpacity, Image, StyleSheet, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import LanguagePicker from "../../components/profile/LanguagePicker";

export default function ProfileScreen() {
  return (
    <View>
      <Header height={140}>
        <Header.Start>
          <View></View>
        </Header.Start>
        <Header.Middle>
          <Text style={[styles.textLarge, styles.textWhite]}>Profile</Text>
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 15,
        }}
      >
        <Image source={require("../../assets/profile.png")} />
        <Text style={[styles.textLarge]}>Mohamed Gamal</Text>
      </View>
      <LanguagePicker />
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
  textLarge: {
    fontSize: 25,
  },
  textMedium: {
    fontSize: 20,
  },
  textWhite: {
    color: "white",
  },
});
