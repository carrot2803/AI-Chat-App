import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";

export default function NewChatBtn() {
	const navigation = useNavigation();
	return (
		<TouchableOpacity style={s.btn} onPress={() => navigation.navigate("Chat" as never)}>
			<AntDesign name="plus" size={24} color={COLORS.white} />
			<Text style={s.btnText}>New Chat</Text>
		</TouchableOpacity>
	);
}

const a: any = { alignItems: "center", justifyContent: "center", flexDirection: "row" };
const s = StyleSheet.create({
	btn: { ...a, backgroundColor: COLORS.primary, width: 300, paddingVertical: SIZES.padding * 2, borderRadius: 25 },
	btnText: { ...FONTS.body3, color: COLORS.white, marginLeft: 8 },
});
