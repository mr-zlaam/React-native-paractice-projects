import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const CategoryCard = ({ imgurl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={imgurl} className="bg-gray-200 h-20 w-20" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
