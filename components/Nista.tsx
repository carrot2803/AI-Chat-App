import { Image, Text } from "react-native";
import { img } from "../constants";
import { useTheme } from "../themes/ThemeProvider";

export default function Nista({ text }: { text: string }) {
	const { colors } = useTheme();
	return (
		<>
			<Image source={{ uri: img.avatar }} style={{ height: 150, width: 150, marginTop: 20 }} />
			<Text style={{ marginVertical: 30, fontSize: 24, color: colors.primary }}>{text}</Text>
		</>
	);
}
