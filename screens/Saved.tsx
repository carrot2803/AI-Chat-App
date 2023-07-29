import { View } from "react-native";
import { Nista } from "../components";
import { useTheme } from "../themes/ThemeProvider";

export default function Saved() {
	const { colors } = useTheme();
	return (
		<View style={{ alignItems: "center", paddingVertical: 300, backgroundColor: colors.background }}>
			<Nista text={"Saved Chats"} />
		</View>
	);
}
