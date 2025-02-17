import {Text, TouchableOpacity} from "react-native";

interface ICustomButtonProps {
  title: string;
  handlePress: () => void;
    containerStyles?:string
    textStyles?:string
    isLoading?: boolean;
}
export function CustomButton({title,handlePress,containerStyles,textStyles,isLoading}: ICustomButtonProps) {
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
    className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
    }`}
    disabled={isLoading}
    >
        <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
}
