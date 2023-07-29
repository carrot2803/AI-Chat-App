import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";
import { useTheme } from "../themes/ThemeProvider";
import { inputProps } from "../types";

export default function Input(props: inputProps) {
	const { colors } = useTheme();
	const onChangeText = (text: string) => props.onInputChanged(props.id, text);
	return (
		<View style={styles.container}>
			<View style={[styles.inputContainer, { borderColor: colors.text }]}>
				<TextInput
					{...props}
					onChangeText={onChangeText}
					style={[styles.input, { color: colors.text }]}
					placeholder={props.placeholder}
					placeholderTextColor={props.placeholderTextColor}
				/>
			</View>
			{props.errorText && (
				<View style={styles.errorContainer}>
					<Text style={styles.errorText}>{props.errorText[0]}</Text>
				</View>
			)}
		</View>
	);
}

const p = { paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding2, marginVertical: 5 };
const b = { borderRadius: 12, borderWidth: 1 };

const styles = StyleSheet.create({
	container: { width: "100%" },
	inputContainer: { ...b, ...p, width: "100%", backgroundColor: COLORS.gray, flexDirection: "row" },
	input: { flex: 1, fontFamily: "regular", paddingTop: 0 },
	errorContainer: { marginVertical: 4 },
	errorText: { color: "red", fontSize: 12 },
});
