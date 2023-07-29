import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";
import { useFonts } from "expo-font";
import { fonts } from "./constants/fonts";
import { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Nav from "./navigation/Nav";
import { ThemeProvider } from "./themes/ThemeProvider";
import { StatusBar } from "expo-status-bar";

preventAutoHideAsync();

export default function App() {
	const [fontsLoaded] = useFonts(fonts);
	const onLayoutRootView = useCallback(async () => (fontsLoaded ? await hideAsync() : null), [fontsLoaded]);

	return fontsLoaded ? (
		<ThemeProvider>
			<SafeAreaProvider onLayout={onLayoutRootView}>
				<Nav />
			</SafeAreaProvider>
			<StatusBar style="auto" />
		</ThemeProvider>
	) : null;
}
