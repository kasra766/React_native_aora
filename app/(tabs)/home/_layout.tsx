import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerTintColor: "#fff",
          headerLargeTitle: true,
          // headerBlurEffect: "regular",
          // headerTransparent: true,
          headerStyle: {
            backgroundColor: "#161622",
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
