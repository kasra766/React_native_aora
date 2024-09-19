import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

interface IFormFieldProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label: string;
  otherStyles?: string;
}
export function FormField({
  label,
  otherStyles,
  ...inputProps
}: IFormFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{label}</Text>
      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          secureTextEntry={label === "Password" && !showPassword}
          {...inputProps}
        />
        {label === "Password" && (
          <TouchableOpacity onPress={togglePassword}>
            <TabBarIcon name={showPassword ? "eye-off" : "eye"} color='#fff'/>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
