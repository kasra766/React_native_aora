import { Text, View } from "react-native";

interface IProps {
  title: string | number;
  containerStyles?: string;
  subtitle?: string;
  titleStyles?: string;
}
export function InfoBox({
  titleStyles,
  title,
  containerStyles,
  subtitle,
}: IProps) {
  return (
    <View className={containerStyles}>
      <Text className={`text-white text-center font-psemibold ${titleStyles}`}>
        {title}
      </Text>
      <Text className="text-sm text-gray-100 text-center font-pregular">
        {subtitle}
      </Text>
    </View>
  );
}
