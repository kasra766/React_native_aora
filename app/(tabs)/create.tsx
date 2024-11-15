import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FormField } from "@/components/FormField";
import { useState } from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { ResizeMode, Video } from "expo-av";
import { CustomButton } from "@/components/CustomButton";

export default function Create() {
  const [form, setForm] = useState({
    title: "",
    prompt: "",
    video: null,
    thumbnail: null,
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6">
        <ThemedText className={"text-2xl text-white font-psemibold"}>
          Upload Video
        </ThemedText>

          <FormField
            label="Video title"
            placeholder="Give your video a catch title..."
            placeholderTextColor="#CDCDE0"
            className="placeholder:text-xs"
            otherStyles="mt-10"
            onChangeText={(text) => setForm({ ...form, title: text })}
          />
          <View className="space-y-2 mt-7">
            <Text className="text-base text-gray-100 font-pmedium">
              Upload Video
            </Text>
            <TouchableOpacity >
              {form.video ? (
                <Video
                  source={{ uri: form.video.uri }}
                  isLooping
                  useNativeControls
                  resizeMode={ResizeMode.COVER}
                  className="w-full h-64 rounded-2xl"
                />
              ) : (
                <View className="justify-center items-center w-full h-64 bg-black-100 rounded-2xl border-2 border-black-200">
                  <View className="items-center justify-center border border-secondary rounded-xl w-16 h-16 p-2">
                    <TabBarIcon
                      name="cloud-upload-outline"
                      className=" text-secondary"
                    />
                  </View>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <View className="space-y-2 mt-7">
            <Text className="text-base text-gray-100 font-pmedium">
              Thumbnail Image
            </Text>
            <TouchableOpacity >
              {form.thumbnail ? (
                <Image
                  source={{ uri: form.thumbnail.uri }}
                  resizeMode="cover"
                  className="w-full h-64 rounded-2xl"
                />
              ) : (
                <View className="justify-center items-center w-full h-16 bg-black-100 rounded-2xl border-2 border-black-200">
                  <View className="items-center justify-center flex-row space-x-2 rounded-xl  h-16 p-2">
                    <TabBarIcon
                      name="cloud-upload-outline"
                      className=" text-secondary"
                    />
                    <Text className="text-xs text-gray-100">Choose a file</Text>
                  </View>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <FormField
            label="Ai Prompt"
            placeholder="The prompt you used to create this video"
            placeholderTextColor="#CDCDE0"
            className="placeholder:text-xs"
            otherStyles="mt-7"
            onChangeText={(text) => setForm({ ...form, prompt: text })}
          />
          <CustomButton title="Submit & Publish" containerStyles='mt-7' handlePress={() => {}} />

      </ScrollView>
    </SafeAreaView>
  );
}
