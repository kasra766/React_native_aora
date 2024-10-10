import { Image, Text, View } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import React from "react";

interface IVideoProps { title:string, creator:string, avatar:string, thumbnail:string, video:string }
export function VideoCard({ title, creator, avatar, thumbnail, video }: IVideoProps) {


  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex flex-row gap-3 items-start">
        <View className="flex justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>
          <View className="flex justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="font-psemibold text-sm text-white"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-xs text-gray-100 font-pregular"
              numberOfLines={1}
            >
              {creator}
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <TabBarIcon name="menu" color="#fff" />
        </View>
      </View>
    </View>
  );
}
