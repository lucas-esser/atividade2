import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#1E5AA8" },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Laticínios Bom Sabor" }} />
      <Stack.Screen name="produtos" options={{ title: "Produtos" }} />
      <Stack.Screen name="promocoes" options={{ title: "Promoções" }} />
    </Stack>
  );
}
