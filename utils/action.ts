import { validateString, validateEmail, validatePassword } from "./constraints";

export const validateInput = (inputId: string, inputValue: string) => {
	if (inputId === "fullName") return validateString(inputId, inputValue);
	else if (inputId === "email") return validateEmail(inputId, inputValue);
	else if (inputId === "password") return validatePassword(inputId, inputValue);
};
