import { KeyboardAvoidingView, Platform } from "react-native";
import React from "react";

const Container = (props: { children: number | React.ReactElement<any | React.JSXElementConstructor<any>> }) => (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
		{props.children}
	</KeyboardAvoidingView>
);

export default Container;
