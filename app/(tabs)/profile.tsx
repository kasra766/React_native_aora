import { SafeAreaView } from "react-native-safe-area-context";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import { VideoCard } from "@/components/VideoCard";

import { EmptyState } from "@/components/EmptyState";
import {getUserPosts, searchPosts} from "@/lib/appWrite";
import { useAppWrite } from "@/hooks/useAppWrite";
import {useGlobalContext} from "@/context/useGlobalContext";
import {TabBarIcon} from "@/components/navigation/TabBarIcon";

export default function Profile() {
  const {user,setUser,setIsLogin }=useGlobalContext()
  const {
    data: posts,
  } = useAppWrite(() => getUserPosts(user.$id));

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
            <View className='w-full justify-center items-center mt-6 px-4'>
                <TouchableOpacity className='w-full items-end mb-10' onPress={()=>
                {}}>
                    <TabBarIcon name="exit-outline" className='text-red-600'/>
                </TouchableOpacity>
                <View className='w-16 h-16 items-center justify-center border border-secondary rounded-lg '>
                   <Image source={{uri:user?.avatar}} resizeMode='cover' className='w-[90%] h-[90%] rounded-lg'/>
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
