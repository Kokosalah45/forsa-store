import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { Text, Image, TouchableOpacity, FlatList, View } from "react-native";
//@ts-ignore
import { Card } from "react-native-shadow-cards";
import { BrandItemType, PageType } from "../../types";
import { useMemo } from "react";
import { useLanguageContext } from "../../contexts/LanguageContext";

const BrandsScrollView = ({
  data: { data, fetchNextPage, hasNextPage, isFetchingNextPage },
}: {
  data: UseInfiniteQueryResult<PageType & BrandItemType, unknown>;
}) => {
  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const brandsData = useMemo(() => {
    const brandPages = data?.pages;
    return brandPages?.reduce<BrandItemType["results"]>(
      (acc, page) => [
        ...acc,
        ...page.results.map(({ title, id }) => ({ title, id })),
      ],
      []
    );
  }, [data?.pages?.length]);

  return (
    <FlatList
      data={brandsData}
      renderItem={({ item: { id, title } }) => (
        <Card
          key={id}
          style={{
            padding: 10,
            width: 180,
            marginHorizontal: 5,
            marginVertical: 10,
            flex: 1,
          }}
        >
          <TouchableOpacity style={{ alignItems: "center", gap: 5 }}>
            <Image
              style={{ width: 60 }}
              source={require("../../assets/product.png")}
            />
            <Text style={{ fontWeight: "700", textTransform: "capitalize" }}>
              {title}
            </Text>
          </TouchableOpacity>
        </Card>
      )}
      horizontal
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.3}
      showsHorizontalScrollIndicator={false}
      removeClippedSubviews
      ListFooterComponent={
        <Card
          style={{
            padding: 10,
            width: 180,
            marginRight: 10,
            marginVertical: 10,
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: "700", textTransform: "capitalize" }}>
            loading...
          </Text>
        </Card>
      }
    />
  );
};

export default BrandsScrollView;
