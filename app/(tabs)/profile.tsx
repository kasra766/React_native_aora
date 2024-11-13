import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { VideoCard } from "@/components/VideoCard";

import { EmptyState } from "@/components/EmptyState";
import { getUserPosts, signOut } from "@/lib/appWrite";
import { useAppWrite } from "@/hooks/useAppWrite";
import { useGlobalContext } from "@/context/useGlobalContext";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { InfoBox } from "@/components/InfoBox";
import { useHandleLogout } from "@/hooks/useHandleLogout";

export default function Profile() {
  const { user } = useGlobalContext();
  const { data: posts } = useAppWrite(() => getUserPosts(user.$id));
  const handleLogout = useHandleLogout();
  return (
    <SafeAreaView className=" bg-primary h-full">
      <FlatList
        data={posts ?? []}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator={item.creator.username}
            avatar={item.creator.avatar}
          />
        )}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center my-6 px-4 ">
            <TouchableOpacity
              className="w-full items-end mb-10"
              onPress={handleLogout}
            >
              <TabBarIcon name="exit-outline" className="text-red-600" />
            </TouchableOpacity>
            <View className="w-16 h-16 items-center justify-center border border-secondary rounded-lg ">
              <Image
                source={{ uri: user?.avatar }}
                resizeMode="cover"
                className="w-[90%] h-[90%] rounded-lg"
              />
            </View>
            <InfoBox
              title={user?.username}
              containerStyles="mt-5"
              titleStyles="text-lg"
            />
            <View className="mt-5 flex-row">
              <InfoBox
                title={posts?.length || 0}
                subtitle="Posts"
                containerStyles="mr-10"
                titleStyles="text-xl"
              />
              <InfoBox
                title="1.5k"
                subtitle="Followers"
                titleStyles="text-xl"
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this search query"
          />
        )}
      />
    </SafeAreaView>
  );
}
