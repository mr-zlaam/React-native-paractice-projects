import React from "react";
import { View, Text, ScrollView } from "react-native";
import CategoryCard from "./CatageoryCard";

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <CategoryCard
        imgurl={require("../../images/meal1.jpg")}
        title="titles1"
      />
      <CategoryCard
        imgurl={require("../../images/meal2.jpg")}
        title="titles2"
      />
      <CategoryCard
        imgurl={require("../../images/meal3.jpg")}
        title="titles3"
      />
      <CategoryCard
        imgurl={require("../../images/meal4.jpg")}
        title="titles4"
      />
      <CategoryCard
        imgurl={require("../../images/meal5.jpg")}
        title="titles5"
      />
      <CategoryCard
        imgurl={require("../../images/meal6.jpg")}
        title="titles6"
      />
      <CategoryCard
        imgurl={require("../../images/meal7.jpg")}
        title="titles7"
      />
      <CategoryCard
        imgurl={require("../../images/meal8.jpg")}
        title="titles8"
      />
      <CategoryCard
        imgurl={require("../../images/meal9.jpg")}
        title="titles9"
      />
      <CategoryCard
        imgurl={require("../../images/meal10.jpg")}
        title="titles10"
      />
    </ScrollView>
  );
};

export default Categories;
