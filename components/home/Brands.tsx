import { useGetBrandsInfinite } from "../../hooks/useGetBrandsInfinite";
import { useGetSectors } from "../../hooks/useGetSectors";
import SectorsScrollView from "./SectorsScrollView";
import BrandsScrollView from "./BrandsScrollView";
import { View } from "react-native";
const Brands = () => {
  const {
    dataObj: { data: sectorData },
    sectorVal,
    setSectorVal,
  } = useGetSectors("");
  const { dataObj } = useGetBrandsInfinite(sectorVal);
  return (
    <View>
      {!!sectorData && (
        <SectorsScrollView
          sectorData={sectorData}
          sectorVal={sectorVal}
          setSectorVal={setSectorVal}
        />
      )}
      {!!dataObj.data && <BrandsScrollView data={dataObj} />}
    </View>
  );
};

export default Brands;
