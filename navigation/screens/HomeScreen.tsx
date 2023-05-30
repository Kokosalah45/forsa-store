import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../../components/common/Header";
import ProductsCarousel from "../../components/home/ProductsCarousel";
import Brands from "../../components/home/Brands";
import TopBrands from "../../components/home/TopBrands";
import FeaturedOffersScrollView from "../../components/home/FeaturedOffersScrollView";

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
      <View
        style={{
          position: "relative",
          paddingHorizontal: 20,
          flex: 1,
        }}
      >
        <Image
          source={require("../../assets/arrow-bg.png")}
          style={{
            position: "absolute",
            top: "5%",
            left: "15%",
          }}
        />
        <ProductsCarousel />
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
          <TopBrands />
          <Brands />
          <FeaturedOffersScrollView />
        </ScrollView>
      </View>
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
