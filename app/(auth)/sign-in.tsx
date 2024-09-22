import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ScrollView, Text, View } from "react-native";
import { images } from "@/constants";
import { FormField } from "@/components/FormField";
import { CustomButton } from "@/components/CustomButton";
import { Link } from "expo-router";
import { useSignInHandlers } from "@/hooks/useAuthHandlers";

export default function SignIn() {
  const { isSubmitting, setForm, form, handleSubmit } = useSignInHandlers();
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
            Log in to Aora
          </Text>
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
            title="Sign in"
            handlePress={handleSubmit}
            containerStyles="mt-7"
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
