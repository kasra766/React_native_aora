import {Link} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, ScrollView } from "react-native";
export default function Welcome() {
    return <SafeAreaView className="bg-primary h-full">
        <ScrollView
            contentContainerStyle={{
                height: "100%",
            }}
        >

    <Link href="/home">Welcome</Link>
        </ScrollView>
    </SafeAreaView>

}