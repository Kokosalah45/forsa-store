//@ts-ignore
import { Card } from "react-native-shadow-cards";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { useMemo } from "react";
import { useGetFeaturedInfinite } from "../../hooks/useGetFeaturedInfinite";
import { FeaturedItemType } from "../../types";
import { useTranslation } from "react-i18next";
import ProductsCarousel from "./ProductsCarousel";
import TopBrands from "./TopBrands";
import Brands from "./Brands";
const FeaturedOffersScrollView = () => {
  const { t } = useTranslation();
  const {
    dataObj: {
      data,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
      isLoading,
    },
  } = useGetFeaturedInfinite();

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const featureItemData = useMemo(() => {
    const featuredItemPages = data?.pages;
    return featuredItemPages?.reduce<FeaturedItemType["results"]>(
      (acc, page) => [
        ...acc,
        ...page.results.map((featuredItem) => ({ ...featuredItem })),
      ],
      []
    );
  }, [data?.pages?.length]);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <Text>loading...</Text>
      ) : (
        <FlatList
          numColumns={2}
          key={2}
          style={{
            gap: 5,
            paddingHorizontal: 15,
            marginTop: -40,
          }}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.3}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View
              style={{
                position: "relative",

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
              <TopBrands />
              <Brands />
              <Text
                style={{
                  paddingVertical: 10,
                  fontSize: 20,
                  fontWeight: "700",
                }}
              >
                {t?.("Featured offers")}
              </Text>
            </View>
          }
          removeClippedSubviews
          nestedScrollEnabled
          keyExtractor={(item) => item.id}
          data={featureItemData}
          renderItem={({
            item: {
              brand: {
                sector: { label },
              },
              description,
              expiry_date,
            },
          }) => (
            <Card style={{ flex: 0.5, margin: 5, overflow: "hidden" }}>
              <Image source={require("../../assets/product-big.png")} />
              <Card
                style={{
                  marginTop: -50,
                  flex: 1,
                  width: "100%",
                  padding: 5,
                  justifyContent: "space-between",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "500",
                    }}
                  >
                    {label}
                  </Text>
                  <Text style={{ color: "gray", padding: 2 }}>
                    {description}
                  </Text>
                </View>
                <Text style={{ color: "gray" }}>{expiry_date}</Text>
              </Card>
            </Card>
          )}
        />
      )}
    </View>
  );
};

export default FeaturedOffersScrollView;
