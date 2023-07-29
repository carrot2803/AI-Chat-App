import { View, Text, SafeAreaView } from "react-native";
import { useTheme } from "../themes/ThemeProvider";
import { SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { Button, Container, Nista } from "../components";

export default function Welcome() {
	const btn = { width: SIZES.width - 44, marginBottom: SIZES.padding };
	const { colors } = useTheme();
	const nav = useNavigation();
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
			<Container>
				<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
					<Text style={[{ color: colors.primary }, { fontSize: 30 }]}>Hello,</Text>
					<Text style={[{ color: colors.primary }, { fontSize: 30, fontWeight: "bold" }]}>I am Nista</Text>
					<Nista text={"Pick any options to continue"} />
					<Button title="Log in" filled onPress={() => nav.navigate("Login" as never)} style={btn} />
					<Button title="Register" onPress={() => nav.navigate("Register" as never)} style={btn} />
				</View>
			</Container>
		</SafeAreaView>
	);
}
