import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Profile(){
    return (<SafeAreaView className="px-4 my-6 bg-primary h-full"> <ThemedView>
        <ThemedText>
            profile
        </ThemedText>
    </ThemedView></SafeAreaView>)
}