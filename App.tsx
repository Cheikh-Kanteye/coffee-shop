import { Button } from "components";
import THEMES from "constants/Themes";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { images } from "./assets";

SplashScreen.preventAutoHideAsync();

const { COLORS, TYPOGRAPHY, SPACING } = THEMES;
export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center", gap: 8 }}
      onLayout={onLayoutRootView}
    >
      <Text style={TYPOGRAPHY.h1}>heading 1</Text>
      <Text style={TYPOGRAPHY.h2}>heading 2</Text>
      <Text style={TYPOGRAPHY.h3}>heading 3</Text>
      <Text style={TYPOGRAPHY.h4}>heading 4</Text>
      <Text style={TYPOGRAPHY.h5}>heading 5</Text>
      <Text style={TYPOGRAPHY.h6}>heading 6</Text>
      <Button label="Large" />
      <Button label="Medium" size="m" />
      <Button label="Add to card" size="m" icon={images.bag} />
      <Button label="Small" size="s" />
      <Button label="Small" size="s" disabled />
      <Button
        label="Like"
        size="s"
        variant="secondary"
        isSwitch
        icon={images.heart}
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: SPACING.m,
  },
});
