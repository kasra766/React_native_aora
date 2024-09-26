import { Image, Text, View } from "react-native";
import { images } from "@/constants";
import {CustomButton} from "@/components/CustomButton";
import {router} from "expo-router";

interface IEmptyStateProps {
  title: string;
  subtitle: string;
}

export function EmptyState({ subtitle, title }: IEmptyStateProps) {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="text-xl text-center mt-2 font-psemibold text-white ">
        {title}
      </Text>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>
        <CustomButton title="Create video" handlePress={()=>router.push('/create')}
        containerStyles='w-full my-5'
        />
    </View>
  );
}
