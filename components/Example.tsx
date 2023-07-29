import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "../themes/ThemeProvider";
import { FONTS, COLORS } from "../constants";

export default function Example({ text }: { text: string }) {
	const { colors } = useTheme();
	return (
		<View style={[s.box, { backgroundColor: colors.background, borderColor: colors.text, borderWidth: 1 }]}>
			<Text style={[s.boxText, { color: colors.text }]}>"{text}"</Text>
		</View>
	);
}

const p = { paddingVertical: 18, paddingHorizontal: 12 };
const s = StyleSheet.create({
	box: { ...p, width: 300, marginVertical: 15, alignItems: "center", justifyContent: "center", borderRadius: 25 },
	boxText: { ...FONTS.body4, textAlign: "center", color: COLORS.white },
});
