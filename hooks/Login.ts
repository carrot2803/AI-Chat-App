import { Alert } from "react-native";
import { useCallback, useEffect, useReducer, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { reducer, loginState, validateInput, getFirebaseApp } from "../utils";
import { useTheme } from "../themes/ThemeProvider";

type loginFormState = [formState: any, setFormState: ({}) => void];

export default function useLogin() {
	const navigation = useNavigation();
	const [formState, setFormState]: loginFormState = useReducer<any>(reducer, loginState);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const { colors } = useTheme();

	const inputChangedHandler = useCallback(
		(inputId: string, inputValue: string) =>
			setFormState({ inputId, validationResult: validateInput(inputId, inputValue), inputValue }),
		[setFormState]
	);

	const loginHandler = async () => {
		const app = getFirebaseApp();
		const auth = getAuth(app);
		setIsLoading(true);

		try {
			const result = await signInWithEmailAndPassword(
				auth,
				formState.inputValues.email,
				formState.inputValues.password
			);

			if (result) {
				setIsLoading(false);
				navigation.navigate("Tabs" as never);
			}
		} catch (error: any) {
			const errorCode = error.code;
			let message = "Something went wrong";

			if (errorCode === "auth/wrong-password" || errorCode === "auth/user-not-found")
				message = "Wrong email or password";

			setError(message);
			setIsLoading(false);
		}
	};

	useEffect(() => (error ? Alert.alert("An error occurred", error) : print()), [error]);
	return { formState, inputChangedHandler, loginHandler, isLoading, colors };
}
