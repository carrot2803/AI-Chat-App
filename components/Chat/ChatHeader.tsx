import { View, Text, TouchableOpacity, StyleSheet, ViewProps } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../themes/ThemeProvider";

export default function ChatHeader() {
	const navigation = useNavigation();
	const { colors } = useTheme();
	return (
		<View style={[s.container, { backgroundColor: colors.background }]}>
			<TouchableOpacity onPress={() => navigation.goBack()} style={s.backbtn}>
				<MaterialIcons name="keyboard-arrow-left" size={30} color={colors.text} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => console.log("Save chat")}>
				<Ionicons name="bookmark-outline" size={25} color={colors.text} />
			</TouchableOpacity>
		</View>
	);
}

const pos: any = { position: "absolute", top: 0, right: 0, alignItems: "center", justifyContent: "space-between" };
const f: any = { flexDirection: "row", marginVertical: 30, paddingHorizontal: 22 };
const s = StyleSheet.create({
	container: { ...pos, ...f, height: 60, width: SIZES.width, zIndex: 9999 },
	backbtn: { height: 40, width: 40, alignItems: "center", justifyContent: "center", marginLeft: -10 },
});
