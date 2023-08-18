import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Catageories from "./Catageories";
import FeatureRow from "./FeatureRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    // code to run on component mount
    return () => {
      // code to run on component unmount
    };
  }, []);

  return (
    <View>
      <SafeAreaView className="bg-white pt-3">
        <StatusBar backgroundColor={"#28282b"} />

        {/* HEADER */}
        <View className="flex-row mx-4 items-center pb-3 space-x-2">
          <Image
            source={require("../../images/main.jpg")}
            className="w-8 h-8 p-5 rounded-full bg-gray-300"
          />
          <View className="flex-1">
            <Text className="font-bold text-xs text-gray-400">Deliveroo</Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00ccbb" />
            </Text>
          </View>
          <View className="ml-2">
            {/* Adding margin to create space */}
            <UserIcon size={30} color="#00ccbb" />
          </View>
          {/* Search Box  */}
        </View>
        <View className="flex-row items-center pb-2 mx-4">
          <View className="flex-row space-x-1 flex-1 bg-gray-200 px-4 py-2 items-center rounded-3xl   ">
            <MagnifyingGlassIcon size={25} color="#00ccbb" />
            <TextInput placeholder="Search" keyboardType="default" />
          </View>
          <AdjustmentsVerticalIcon size={30} color="#00ccbb" />
        </View>
        {/* Body */}
      </SafeAreaView>
      <ScrollView>
        {/* Catageories */}
        <Catageories />

        {/* Feature Row */}
        <FeatureRow
          id="123"
          title="Featured"
          description="Paid Placement from our Partners"
          featureCatageory="featured"
        />
        {/* Tasty Discount*/}
        <FeatureRow
          id="1234"
          title="Featured"
          description="Paid Placement from our Partners"
          featureCatageory="featured"
        />
        {/* Offers Near You */}
        <FeatureRow
          id="1235"
          title="Featured"
          description="Paid Placement from our Partners"
          featureCatageory="featured"
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
