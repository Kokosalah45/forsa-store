//@ts-ignore
import { Card } from "react-native-shadow-cards";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useMemo } from "react";
import { useGetFeaturedInfinite } from "../../hooks/useGetFeaturedInfinite";
import { FeaturedItemType } from "../../types";
import { useTranslation } from "react-i18next";
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
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {featureItemData?.map(
              ({
                brand: {
                  sector: { label },
                },
                description,
                expiry_date,
              }) => (
                <TouchableOpacity style={{ margin: 3, width: "48%" }}>
                  <Card style={{ width: "100%" }}>
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
                </TouchableOpacity>
              )
            )}
          </ScrollView>
          {/* <FlatList
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
          /> */}
        </>
      )}
    </View>
  );
};

export default FeaturedOffersScrollView;
