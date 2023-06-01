import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import Header from "../../components/common/Header";
import MainView from "../../components/home/FeaturedOffersScrollView";

export default function HomeScreen() {
  return (
    <View style={[styles.container]}>
      <Header height={250}>
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

      <MainView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  flexRow: {
    flexDirection: "row",
    gap: 10,
  },
  column: {
    flex: 1,
    alignItems: "center",
    marginVertical: 2,
    justifyContent: "center",
    backgroundColor: "#eeeeee",
  },
});
