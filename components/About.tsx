import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../themes/ThemeProvider";

export default function About({ label, text }: { label: string; text: string }) {
	const { colors } = useTheme();
	return (
		<View style={styles.infoContainer}>
			<Text style={styles.infoLabel}>{label}</Text>
			<Text style={[styles.infoText, { color: colors.text }]}>{text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	infoContainer: { flexDirection: "row", alignItems: "center", margin: 10 },
	infoLabel: { fontSize: 16, fontWeight: "600", color: "#666666", marginRight: 8 },
	infoText: { fontSize: 16 },
});
