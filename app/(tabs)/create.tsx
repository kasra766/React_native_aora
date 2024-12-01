import { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import { ResizeMode, Video } from "expo-av";
import { router } from "expo-router";

import { FormField } from "@/components/FormField";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { CustomButton } from "@/components/CustomButton";
import { useGlobalContext } from "@/context/useGlobalContext";
import { createVideoPost } from "@/lib/appWrite";

interface TForm {
  title: string;
  prompt: string;
  video: null | DocumentPicker.DocumentPickerAsset;
  thumbnail: null | DocumentPicker.DocumentPickerAsset;
}
export default function Create() {
  const { user } = useGlobalContext();
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState<TForm>({
    title: "",
    prompt: "",
    video: null,
    thumbnail: null,
  });

  const openPicker = async (selectType: "image" | "video") => {
    const result = await DocumentPicker.getDocumentAsync({
      type:
        selectType === "image"
          ? ["image/png", "image/jpg"]
          : ["video/mp4", "video/gif"],
    });

    if (!result.canceled) {
      if (selectType === "image") {
        setForm({
          ...form,
          thumbnail: result.assets[0],
        });
      }

      if (selectType === "video") {
        setForm({
          ...form,
          video: result.assets[0],
        });
      }
    } else {
      setTimeout(() => {
        Alert.alert("Document picked", JSON.stringify(result, null, 2));
      }, 100);
    }
  };

  const submit = async () => {
    if (
      form.prompt === "" ||
      form.title === "" ||
      !form.thumbnail ||
      !form.video
    ) {
      return Alert.alert("Please provide all fields");
    }

    setUploading(true);
    try {
      await createVideoPost({
        ...form,
        userId: user.$id,
      });

      Alert.alert("Success", "Post uploaded successfully");
      router.push("/home");
    } catch (error) {
      Alert.alert("Error", (error as any).message);
    } finally {
      setForm({
        title: "",
        video: null,
        thumbnail: null,
        prompt: "",
      });

      setUploading(false);
    }
  };
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
          value={form.title}
          onChangeText={(text) => setForm({ ...form, title: text })}
        />
        <View className="space-y-2 mt-7">
          <Text className="text-base text-gray-100 font-pmedium">
            Upload Video
          </Text>
          <TouchableOpacity onPress={() => openPicker("video")}>
            {form.video ? (
              <Video
                source={{ uri: form.video.uri }}
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
          <TouchableOpacity onPress={() => openPicker("image")}>
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
          value={form.prompt}
          onChangeText={(text) => setForm({ ...form, prompt: text })}
        />
        <CustomButton
          title="Submit & Publish"
          containerStyles="mt-7"
          handlePress={submit}
          isLoading={uploading}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
