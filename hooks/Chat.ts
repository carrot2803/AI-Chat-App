import { useState } from "react";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import { COMPLETION, IMAGE, KEY } from "../utils";

export default function useChat() {
	const [inputMessage, setInputMessage] = useState("");
	const [, setOutputMessage] = useState("Results should be shown here.");
	const [isTyping, setIsTyping] = useState(false);
	const [messages, setMessages] = useState<IMessage[]>([]);

	const generateText = () => {
		setIsTyping(true);
		const message: IMessage = {
			_id: Math.random().toString(36).substring(7),
			text: inputMessage,
			createdAt: new Date(),
			user: { _id: 1 },
		};

		setMessages((previousMessage) => GiftedChat.append(previousMessage, [message]));

		fetch(COMPLETION, {
			method: "POST",
			headers: { "Content-Type": "application/json", Authorization: KEY },
			body: JSON.stringify({ model: "gpt-3.5-turbo", messages: [{ role: "user", content: inputMessage }] }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data.choices[0].message.content);
				setInputMessage("");
				setOutputMessage(data.choices[0].message.content.trim());

				const message: IMessage = {
					_id: Math.random().toString(36).substring(7),
					text: data.choices[0].message.content.trim(),
					createdAt: new Date(),
					user: { _id: 2, name: "AI" },
				};

				setIsTyping(false);
				setMessages((previousMessage) => GiftedChat.append(previousMessage, [message]));
			});
	};

	const generateImages = () => {
		setIsTyping(true);
		const message: IMessage = {
			_id: Math.random().toString(36).substring(7),
			text: inputMessage,
			createdAt: new Date(),
			user: { _id: 1 },
		};

		setMessages((previousMessage) => GiftedChat.append(previousMessage, [message]));

		fetch(IMAGE, {
			method: "POST",
			headers: { "Content-Type": "application/json", Authorization: KEY },
			body: JSON.stringify({ prompt: inputMessage, n: 1, size: "1024x1024" }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data.data[0].url);
				setInputMessage("");
				setOutputMessage(data.data[0].url);
				setIsTyping(false);

				data.data.forEach((item: { url: string }) => {
					const message = {
						_id: Math.random().toString(36).substring(7),
						text: "Image",
						createdAt: new Date(),
						user: { _id: 2, name: "AI" },
						image: item.url,
					};

					setMessages((previousMessage) => GiftedChat.append(previousMessage, [message]));
				});
			});
	};

	return { generateImages, generateText, messages, isTyping, inputMessage, setInputMessage };
}
