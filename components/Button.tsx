import { Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { btnProps } from "../types";

export default function Button(props: btnProps) {
	const filledBgColor = props.color || COLORS.primary;
	const outlined = COLORS.white;
	const bgColor = props.filled ? filledBgColor : null;
	const textColor = props.filled ? COLORS.white || props.textColor : COLORS.primary || props.textColor;
	const loading = props.loading || false;

	return (
		<TouchableOpacity onPress={props.onPress} style={{ ...s.btn, ...{ backgroundColor: bgColor }, ...props.style }}>
			{loading == true ? (
				<ActivityIndicator size="small" color={COLORS.white} />
			) : (
				<Text style={{ ...FONTS.body2, ...{ color: textColor } }}>{props.title}</Text>
			)}
		</TouchableOpacity>
	);
}

const border = { borderColor: COLORS.primary, borderWidth: 2, marginVertical: 2, borderRadius: SIZES.padding };
const padding = { paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding };

const s = StyleSheet.create({
	btn: { ...border, ...padding, alignItems: "center", justifyContent: "center" },
});
