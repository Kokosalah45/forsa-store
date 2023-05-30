//@ts-ignore
import { Card } from "react-native-shadow-cards";
import { View, Text, FlatList, Image } from "react-native";
import { useMemo } from "react";
import { useGetFeaturedInfinite } from "../../hooks/useGetFeaturedInfinite";
import { FeaturedItemType } from "../../types";
import { useLanguageContext } from "../../contexts/LanguageContext";
const FeaturedOffersScrollView = () => {
  const { t } = useLanguageContext();
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
    <View>
      {isLoading ? (
        <Text>loading...</Text>
      ) : (
        <>
          <Text
            style={{ paddingVertical: 10, fontSize: 20, fontWeight: "700" }}
          >
            {t?.("Featured offers")}
          </Text>
          <FlatList
            numColumns={2}
            key={2}
            style={{
              gap: 5,
              padding: 5,
            }}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.3}
            showsVerticalScrollIndicator={false}
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
              <Card style={{ flex: 0.5, margin: 3, overflow: "hidden" }}>
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
        </>
      )}
    </View>
  );
};

export default FeaturedOffersScrollView;
