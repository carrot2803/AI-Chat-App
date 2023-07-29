import { View, Text, Image } from "react-native";
import { useTheme } from "../themes/ThemeProvider";
import About from "../components/About";
import { img } from "../constants";

export default function Profile() {
	const { colors } = useTheme();
	return (
		<View style={{ flex: 1, backgroundColor: colors.background }}>
			<View style={{ alignItems: "center", justifyContent: "center", padding: 50 }}>
				<View style={{ marginTop: 150 }}>
					<Image
						source={{ uri: img.profile }}
						style={{ height: 300, width: 310, borderRadius: 200, marginLeft: 8 }}
					/>
				</View>
				<View style={{ marginTop: 50, alignItems: "center" }}>
					<Text style={{ fontSize: 24, fontWeight: "600", color: colors.text }}>Dmitri Lezama</Text>
				</View>
				<About label={"Email: "} text={"lezamadmitri@gmail.com"} />
				<About label={"Portfolio"} text={"https://github.com/carrot2803"} />
			</View>
		</View>
	);
}
