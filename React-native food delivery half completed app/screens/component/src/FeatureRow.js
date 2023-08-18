import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturrantCards from "./ResturrantCards";

const FeatureRow = ({ title, description, featureCatageory }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon color="black" />
      </View>
      <Text className="px-4 text-xs text-gray-500">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* ResturrantCards... */}
        <ResturrantCards />
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
