import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { images } from "@/constants";
import { FormField } from "@/components/FormField";
import { useState } from "react";
import { CustomButton } from "@/components/CustomButton";
import { Link } from "expo-router";

export default function SignUp() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleSubmit() {
    Alert.alert(form.email, JSON.stringify(form));
  }
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full flex justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[34px]"
            resizeMode="contain"
          />
          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Sign up to Aora
          </Text>
          <FormField
            label="User name"
            value={form.username}
            onChangeText={(text) => setForm({ ...form, username: text })}
            otherStyles="mt-7"
          />
          <FormField
            label="Email"
            value={form.email}
            onChangeText={(text) => setForm({ ...form, email: text })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            label="Password"
            value={form.password}
            onChangeText={(text) => setForm({ ...form, password: text })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Sign up"
            handlePress={handleSubmit}
            containerStyles="mt-7"
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
