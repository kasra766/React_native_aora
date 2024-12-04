import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { router, usePathname } from "expo-router";

interface ISearchInputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  initialValue?: string;
}
export function SearchInput({
  initialValue,
  ...inputProps
}: ISearchInputProps) {
  const pathName = usePathname();
  const [query, setQuery] = useState(initialValue || "");

  function handleSubmitQuery() {
    if (!query.trim()) {
      return Alert.alert(
        "Missing query",
        "Please input something to search results across database",
      );
    }
    if (pathName.startsWith("/search")) return router.setParams({ query });
    router.push(`/search/${query}`);
  }
  return (
    <View className="flex flex-row items-center space-x-4 w-full  px-4 py-2 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary">
      <TextInput
        className="text-base  text-white flex-1 font-pregular"
        placeholder="Search a video topic"
        placeholderTextColor="#CDCDE0"
        {...inputProps}
        onChangeText={setQuery}
        testID='searchInputField'
      />

      <TouchableOpacity onPress={handleSubmitQuery}>
        <TabBarIcon name={"search"} color="#fff" className="size-5" />
      </TouchableOpacity>
    </View>
  );
}
