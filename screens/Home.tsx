import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { COLORS, FONTS } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../themes/ThemeProvider";
import { Example, NewChatBtn } from "../components";

export default function Home() {
	const { dark, colors, setScheme } = useTheme();
	const ToggleTheme = () => (dark ? setScheme("light") : setScheme("dark"));
	const icon = !dark ? "sunny-outline" : "partly-sunny-sharp";
	return (
		<SafeAreaView style={[s.areaStyle, { backgroundColor: colors.background }]}>
			<View style={s.center}>
				<TouchableOpacity onPress={ToggleTheme}>
					<Ionicons name={icon} size={32} color={dark ? COLORS.white : COLORS.black} />
				</TouchableOpacity>
				<Text style={[s.subTitle, { color: colors.text }]}>Examples</Text>
				<Example text={"Prove the square root of 2 is irrational via contradiction"} />
				<Example text={"How To make an HTTP request in JavaScript ?"} />
				<Example text={"Got any creative ideas to feed my cat medicine ?"} />
				<NewChatBtn />
			</View>
		</SafeAreaView>
	);
}

const s = StyleSheet.create({
	areaStyle: { flex: 1 },
	center: { flex: 1, alignItems: "center", justifyContent: "center" },
	subTitle: { ...FONTS.h4, marginVertical: 22 },
});
