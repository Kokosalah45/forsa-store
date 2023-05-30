import { useInfiniteQuery } from "@tanstack/react-query";
import { PageType, BrandItemType } from "../types";
const fetchBrands =
  (sectorVal: string) =>
  async ({ pageParam = 1 }): Promise<PageType & BrandItemType> => {
    const response = await fetch(
      `https://forsa-staging.bit68.com/api/v1/stores/get_brands?sector=${sectorVal}&page=${pageParam}`
    );
    const data = (await response.json()) as PageType & BrandItemType;
    return data;
  };

export function useGetBrandsInfinite(sectorVal: string) {
  const dataObj = useInfiniteQuery(
    ["brands", sectorVal],
    fetchBrands(sectorVal),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
      },
    }
  );

  return { dataObj };
}
