import { createContext, useContext, useEffect, useState } from "react";
import { lightColors, darkColors, Colors } from "./Colors";
import { useColorScheme } from "react-native";

type themeProps = { dark: boolean; colors: Colors; setScheme: (scheme: string) => void };

export const ThemeContext: React.Context<themeProps> = createContext({
	dark: false,
	colors: lightColors,
	setScheme: () => { },
} as any);

export const ThemeProvider = (props: { children: any }) => {
	const colorScheme = useColorScheme();
	const [isDark, setIsDark] = useState(colorScheme == "dark");

	useEffect(() => setIsDark(colorScheme == "dark"), [colorScheme]);

	const defaultTheme = {
		dark: isDark,
		colors: isDark ? darkColors : lightColors,
		setScheme: (scheme: string) => setIsDark(scheme === "dark"),
	};
	return <ThemeContext.Provider value={defaultTheme}>{props.children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
