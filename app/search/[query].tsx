import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { VideoCard } from "@/components/VideoCard";

import { EmptyState } from "@/components/EmptyState";
import { searchPosts } from "@/lib/appWrite";
import { useAppWrite } from "@/hooks/useAppWrite";
import { useEffect, useState } from "react";
import { SearchInput } from "@/components/SearchInput";

export default function Search() {
  const { query } = useLocalSearchParams();
  const {
    data: posts,
    isLoading,
    reFetch,
  } = useAppWrite(() => searchPosts(query as string));
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => reFetch(), 500);
    return () => clearTimeout(timer);
  }, [query]);

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
          <View className="my-6 px-4 gap-2">
            <Text className="font-pmedium text-sm text-gray-100">
              Search Results
            </Text>
            <Text className="text-2xl font-psemibold text-white ">{query}</Text>
            <View className="mt-6 mb-8">
              <SearchInput
                initialValue={(query as string) || ""}
                placeholder="Serach for a video topic"
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
