import { Image, Text, TouchableOpacity, View } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import React, { useState } from "react";
import { ResizeMode, Video } from "expo-av";

interface IVideoProps {
  title: string;
  creator: string;
  avatar: string;
  thumbnail: string;
  video: string;
}
export function VideoCard({
  title,
  creator,
  avatar,
  thumbnail,
  video,
}: IVideoProps) {
  const [play, setPlay] = useState(false);

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
          <TabBarIcon name="ellipsis-vertical" color="#fff" />
        </View>
      </View>

      {play ? (
        <Video
          source={{ uri: video }}
          className="w-full h-60 rounded-xl mt-3 bg-white/10"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            //@ts-ignore
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(!play)}
          className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            resizeMode="cover"
            className="w-full h-full rounded-xl mt-3"
          />
          <TabBarIcon
            name="play-circle-outline"
            className="absolute w-12 h-12"
            color="#fff"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
