import { Redirect, Tabs } from "expo-router";
import React, { type ComponentProps } from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";
import { useGlobalContext } from "@/context/useGlobalContext";
import { Loader } from "@/components/Loader";
import { StatusBar } from "expo-status-bar";

interface ITabIconProps {
  focused: boolean;
  color: string;
  icon: ComponentProps<typeof Ionicons>["name"];
  name: string;
}
function TabIcon({ focused, color, icon, name }: ITabIconProps) {
  return (
    <View className="flex-col space-y-2 items-center">
      <TabBarIcon name={icon} color={color} style={{ marginBottom: 0 }} />
      {/*<Text*/}
      {/*  className={`${focused ? "font-psemibold" : "font-pregular"} text-xs flex-nowrap whitespace-nowrap`}*/}
      {/*  style={{ color: color }}*/}
      {/*>*/}
      {/*  {name}*/}
      {/*</Text>*/}
    </View>
  );
}

export default function TabLayout() {
  const { isLoading, isLogin } = useGlobalContext();
  if (!isLoading && !isLogin) return <Redirect href={"/sign-in"} />;
  return (
      <>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        // tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
          tabBarLabelStyle:{fontSize:12},
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84,
          overflow: "hidden",
          // paddingTop: 15,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              focused={focused}
              color={color}
              name={"home"}
              icon={focused ? "home" : "home-outline"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          headerShown: false,

          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              focused={focused}
              name={"Bookmark"}
              icon={focused ? "bookmark" : "bookmark-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              focused={focused}
              name={"Create"}
              icon={focused ? "add-circle" : "add-circle-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              focused={focused}
              name={"Profile"}
              icon={focused ? "person" : "person-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
          <Loader isLoading={isLoading}/>
          <StatusBar backgroundColor='#161612' style="light"/>
      </>
  );
}
