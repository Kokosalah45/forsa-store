import React from "react";
import { ImageBackground } from "react-native";
import { StyleSheet, View } from "react-native";

interface Props {
  children: React.ReactNode;
  height: number;
}

export default function Header({ children, height = 200 }: Props) {
  return (
    <ImageBackground
      source={require("../../assets/Ellipse.png")}
      style={[styles.backgroundImage, { height }]}
    >
      <View style={[styles.container]}>{children}</View>
    </ImageBackground>
  );
}

const Start = ({ children }: Pick<Props, "children">) => {
  return (
    <View
      style={{
        //flex: 1,
        flexBasis: "30%",
        alignItems: "flex-start",
        //backgroundColor: "red",
      }}
    >
      {children}
    </View>
  );
};
const Middle = ({ children }: Pick<Props, "children">) => {
  return (
    <View
      style={{
        //flex: 1,
        flexBasis: "30%",
        alignItems: "center",
        //backgroundColor: "red",
      }}
    >
      {children}
    </View>
  );
};
const End = ({ children }: Pick<Props, "children">) => {
  return (
    <View
      style={{
        //flex: 1,
        flexBasis: "30%",
        alignItems: "flex-end",
        //backgroundColor: "red",
      }}
    >
      {children}
    </View>
  );
};

Header.Start = Start;
Header.Middle = Middle;
Header.End = End;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  backgroundImage: {
    width: "100%",
    resizeMode: "cover",
  },
});
