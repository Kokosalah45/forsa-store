import { useInfiniteQuery } from "@tanstack/react-query";
import { PageType, FeaturedItemType } from "../types";
const fetchFeaturedOffers = async ({
  pageParam = 1,
}): Promise<PageType & FeaturedItemType> => {
  const response = await fetch(
    `https://forsa-staging.bit68.com/api/v1/stores/get_offers/?featured=true&page=${pageParam}`
  );

  const data = (await response.json()) as PageType & FeaturedItemType;
  return data;
};

export function useGetFeaturedInfinite() {
  const dataObj = useInfiniteQuery(["featured_offers"], fetchFeaturedOffers, {
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

  return { dataObj };
}
