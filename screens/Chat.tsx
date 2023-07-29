import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GiftedChat } from "react-native-gifted-chat";
import { useTheme } from "../themes/ThemeProvider";
import { ChatBox, ChatHeader, renderMessage } from "../components/Chat";
import useChat from "../hooks/Chat";

export default function Chat() {
	const { generateImages, generateText, messages, isTyping, inputMessage, setInputMessage } = useChat();
	const submit = () => (inputMessage.toLowerCase().startsWith("image") ? generateImages() : generateText());
	const handleInputText = (text: React.SetStateAction<string>) => setInputMessage(text);
	const { colors } = useTheme();

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
			<ChatHeader />
			<View style={{ flex: 1, justifyContent: "center" }}>
				<GiftedChat
					messages={messages}
					// @ts-ignore toolbar error
					renderInputToolbar={() => {}}
					user={{ _id: 1 }}
					minInputToolbarHeight={0}
					renderMessage={renderMessage}
					isTyping={isTyping}
				/>
			</View>
			<ChatBox inputMessage={inputMessage} handleInputText={handleInputText} submit={submit} />
		</SafeAreaView>
	);
}
