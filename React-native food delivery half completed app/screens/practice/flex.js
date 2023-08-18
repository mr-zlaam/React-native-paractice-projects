import React from "react";
import { View, Text } from "react-native";

const FlexPractice = () => {
  return (
    <View className=" flex-1">
      <View style={{ flex: 2, backgroundColor: "green", flexDirection: "row" }}>
        <View style={{ flex: 1, backgroundColor: "yellow", margin: 10 }}></View>
        <View style={{ flex: 2, backgroundColor: "gray", margin: 10 }}></View>
        <View style={{ flex: 1, backgroundColor: "white", margin: 10 }}></View>
      </View>
      <View style={{ flex: 1, backgroundColor: "red" }}></View>
      <View style={{ flex: 1, backgroundColor: "blue" }}></View>
    </View>
  );
};
export default FlexPractice;
