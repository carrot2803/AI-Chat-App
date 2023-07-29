import { useCallback, useReducer, useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useTheme } from "../themes/ThemeProvider";
import { useNavigation } from "@react-navigation/native";
import { getFirebaseApp, initialState, reducer, validateInput } from "../utils";
import { Alert } from "react-native";
import { createUser } from "./functions";

type FormState = [formState: any, dispatchFormState: ({}) => void];

export function useRegister() {
	const navigation = useNavigation();
	const [formState, dispatchFormState]: FormState = useReducer<any>(reducer, initialState);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const { colors } = useTheme();

	const inputChangedHandler = useCallback(
		(inputId: string, inputValue: string) =>
			dispatchFormState({ inputId, validationResult: validateInput(inputId, inputValue), inputValue }),
		[dispatchFormState]
	);

	const authHandler = async () => {
		const auth = getAuth(getFirebaseApp());
		setIsLoading(true);

		try {
			const result = await createUserWithEmailAndPassword(
				auth,
				formState.inputValues.email,
				formState.inputValues.password
			);

			const { uid } = result.user;
			const userData = await createUser(formState.inputValues.fullName, formState.inputValues.email, uid);

			if (userData) {
				setIsLoading(false);
				navigation.navigate("Login" as never);
			}
		} catch (error: any) {
			const errorCode = error.code;
			let message = "Something went wrong !";
			if (errorCode === "auth/email-already-in-use") message = "This email is already in use";
			setError(message);
			setIsLoading(false);
		}
	};
	useEffect(() => (error ? Alert.alert("An error occurred", error) : print()), [error]);
	return { formState, inputChangedHandler, authHandler, isLoading, colors };
}
