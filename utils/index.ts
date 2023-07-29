import { reducer } from "./reducer";
import { validateInput } from "./action";
import { getFirebaseApp } from "./firebase";
import { COMPLETION, IMAGE, KEY } from "./config";

const initialState = {
	inputValues: { fullName: "", email: "", password: "" },
	inputValidities: { fullName: false, email: false, password: false },
	formIsValid: false,
};

const loginState = {
	inputValues: { email: "", password: "" },
	inputValidities: { email: false, password: false },
	formIsValid: false,
};

export { initialState, loginState, reducer, validateInput, getFirebaseApp, KEY, COMPLETION, IMAGE };
