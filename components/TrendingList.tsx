import {
  FlatList,
  ImageBackground,
  TouchableOpacity,
  ViewToken,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useState } from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { ResizeMode, Video } from "expo-av";

interface ITrendingListProps {
  posts: any[];
}
interface ITrendingItemProps {
  item: ITrendingListProps["posts"][number];
  activeItemId: number | string;
}

const zoomIn = {
  "0": {
    scale: 0.9,
  },
  "1": {
    scale: 1.1,
  },
};
const zoomOut = {
  "0": {
    scale: 1,
  },
  "1": {
    scale: 0.9,
  },
};

function TrendingItem({ item, activeItemId }: ITrendingItemProps) {
  const [play, setPlay] = useState(false);
  return (
    <Animatable.View
      className="mr-5"
      //@ts-ignore
      animation={activeItemId === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <Video
          source={{ uri: item.video }}
          className="w-52 h-72 rounded-[35px] mt-3 bg-white/10"
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
          className="relative justify-center items-center "
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40"
            resizeMode="cover"
          />
          <TabBarIcon
            name="play-circle-outline"
            className="absolute w-12 h-12"
            color="#fff"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
}
export function TrendingList({ posts }: ITrendingListProps) {
  const [activeItem, setActiveItem] = useState(posts[0]);
  const onViewableItemChanged = (info: {
    viewableItems: ViewToken<any>[];
    changed: ViewToken<any>[];
  }) => {
    if (info.viewableItems.length > 0) {
      setActiveItem(info.viewableItems[0].key);
    }
  };
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id.toString()}
      renderItem={({ item }) => (
        <TrendingItem item={item} activeItemId={activeItem} />
      )}
      onViewableItemsChanged={onViewableItemChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      contentOffset={{ x: 170, y: 0 }}
      horizontal
    />
  );
}
