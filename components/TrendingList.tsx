import { FlatList, Text } from "react-native";

interface ITrendingListProps {
  posts: { id: number }[];
}
export function TrendingList ({ posts }: ITrendingListProps)  {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Text className="text-white">{item.id}</Text>}
      horizontal
    />
  );
};
