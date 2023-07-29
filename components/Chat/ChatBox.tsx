import { TextInput, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "../../themes/ThemeProvider";
import { chatBoxProps } from "../../types";

export default function ChatBox({ inputMessage, handleInputText, submit }: chatBoxProps) {
	const { colors } = useTheme();

	return (
		<View style={{ flexDirection: "row", backgroundColor: colors.background, paddingVertical: 8 }}>
			<View style={input}>
				<TextInput
					value={inputMessage}
					onChangeText={handleInputText}
					placeholder="Enter your question"
					placeholderTextColor={colors.text}
					style={{ color: colors.text, flex: 1, paddingHorizontal: 10 }}
				/>
				<TouchableOpacity onPress={submit} style={{ padding: 6, borderRadius: 8, marginHorizontal: 12 }}>
					<FontAwesome name="send-o" color={COLORS.primary} size={24} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const m = { marginLeft: 10, marginHorizontal: 12 };
const input: any = { ...m, flex: 1, flexDirection: "row", paddingVertical: 8, borderRadius: 12, borderWidth: 0.2 };
