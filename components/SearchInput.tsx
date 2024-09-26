import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

interface ISearchInputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {}
export function SearchInput({ ...inputProps }: ISearchInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  return (
    <View className="flex flex-row items-center space-x-4 w-full  px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        placeholder="Search a video topic"
        placeholderTextColor="#CDCDE0"
        {...inputProps}
      />

      <TouchableOpacity onPress={() => {}}>
        <TabBarIcon name={"search"} color="#fff" className="size-5" />
      </TouchableOpacity>
    </View>
  );
}
