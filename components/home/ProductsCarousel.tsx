import {
  Text,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import featured from "../../assets/featured.png";
import nike from "../../assets/nike.png";
import Swiper from "react-native-swiper";
import { useTranslation } from "react-i18next";

const ProductsCarousel = () => {
  const { t } = useTranslation();
  return (
    <View
      style={{
        marginTop: -45,
        marginBottom: 10,
        height: 138,
      }}
    >
      <Swiper
        loop
        autoplay
        showsPagination={false}
        removeClippedSubviews={false}
        containerStyle={{
          borderRadius: 15,
          overflow: "hidden",
          borderColor: "#3EBDAC",
          borderWidth: 2,
          borderStyle: "solid",
        }}
      >
        <ImageBackground
          style={{
            flex: 1,
          }}
          imageStyle={{ transform: [{ scale: 1.1 }] }}
          source={featured}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              padding: 10,
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Image source={nike} />
            <Text style={{ fontSize: 20 }}>
              {t?.("Check out our latest offers")}
            </Text>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground
          style={{
            flex: 1,
          }}
          source={featured}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              padding: 10,
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Image source={nike} />
            <Text style={{ fontSize: 20 }}>
              {t?.("Check out our latest offers")}
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </Swiper>
    </View>
  );
};

export default ProductsCarousel;
