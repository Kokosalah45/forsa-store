import { Text, View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { SectorType } from "../../types";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  sectorData: SectorType["results"];
  sectorVal: string;
  setSectorVal: Dispatch<SetStateAction<string>>;
}
const SectorsScrollView = ({ sectorVal, sectorData, setSectorVal }: IProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          gap: 5,
          alignItems: "center",
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity
          style={{
            backgroundColor: sectorVal === "" ? "#3EBDAC" : undefined,
            borderRadius: 5,
            padding: 5,
          }}
          onPress={() => setSectorVal("")}
        >
          <Text style={{ color: sectorVal === "" ? "white" : undefined }}>
            All
          </Text>
        </TouchableOpacity>
        {sectorData &&
          sectorData.map(({ label, value, slug }) => (
            <TouchableOpacity
              style={{
                backgroundColor: sectorVal === value ? "#3EBDAC" : undefined,
                borderRadius: 5,
                padding: 5,
              }}
              key={slug}
              onPress={() => setSectorVal(value)}
            >
              <Text
                style={{ color: sectorVal === value ? "white" : undefined }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default SectorsScrollView;
