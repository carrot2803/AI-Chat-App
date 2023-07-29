import { GestureResponderEvent } from "react-native";

export type btnProps = {
	color?: string;
	filled?: boolean;
	textColor?: string;
	loading?: boolean;
	onPress: ((event: GestureResponderEvent) => void) | undefined;
	style: any;
	title: string | number | boolean;
};

export type Constraints = {
	presence: { allowEmpty: boolean };
	format?: { pattern: string; flags: string; message: string };
	email?: boolean;
	length?: { minimum: number; message: string };
};

export type Action = { validationResult: string[]; inputId: number; inputValue: string[] };

export type State = { inputValues: string[]; inputValidities: string[] };

export type inputProps = {
	id: string;
	onInputChanged: (inputId: string, inputValue: string) => void;
	placeholder: string;
	placeholderTextColor: string;
	errorText: string;
	secureTextEntry?: boolean;
};

export type chatBoxProps = {
	inputMessage: string;
	handleInputText: (text: React.SetStateAction<string>) => void;
	submit: () => void;
};
