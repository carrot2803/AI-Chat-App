import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { MessageProps, IMessage, Bubble } from "react-native-gifted-chat";
import { COLORS, img } from "../../constants";

export default function renderMessage(props: Readonly<MessageProps<IMessage>>): React.ReactNode {
	if (props!.user._id === 1) {
		return (
			<View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
				<Bubble {...props} wrapperStyle={{ right: s.right }} textStyle={{ right: { color: COLORS.white } }} />
			</View>
		);
	} else {
		return (
			<View style={{ marginLeft: 50 }}>
				<Image source={{ uri: img.avatar }} style={s.img} />
				<Bubble {...props} wrapperStyle={{ left: s.left }} textStyle={{ left: { color: COLORS.black } }} />
			</View>
		);
	}
}

const s = StyleSheet.create({
	right: { backgroundColor: COLORS.primary, marginRight: 12, marginVertical: 12 },
	left: { backgroundColor: COLORS.secondaryWhite, marginLeft: 12 },
	img: { height: 50, width: 50, borderRadius: 20, marginLeft: 8 },
});
