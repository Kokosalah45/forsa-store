import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SectorType, PageType } from "../types";

const getSectors = async (): Promise<SectorType["results"]> => {
  const res = await fetch(
    "https://forsa-staging.bit68.com/api/v1/stores/get_sectors/"
  );
  if (res.ok) {
    const { results: sectors } = (await res.json()) as PageType & SectorType;
    return sectors.map(({ value, label, slug }) => ({ value, label, slug }));
  }
  return [];
};
export function useGetSectors(sectorValue: string) {
  const [sectorVal, setSectorVal] = useState(sectorValue);

  const dataObj = useQuery(["sectors"], getSectors);

  return { sectorVal, dataObj, setSectorVal };
}
