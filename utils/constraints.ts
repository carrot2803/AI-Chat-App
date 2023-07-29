import { validate } from "validate.js";
import { Constraints } from "../types";

export const validateString = (id: string, value: string) => {
	const constraints: Constraints = { presence: { allowEmpty: false } };
	if (value !== "") constraints.format = { pattern: ".+", flags: "i", message: "Value can't be blank" };
	const validationResult = validate({ [id]: value }, { [id]: constraints });
	return validationResult && validationResult[id];
};

export const validateEmail = (id: string, value: string) => {
	const constraints: Constraints = { presence: { allowEmpty: false } };
	if (value !== "") constraints.email = true;
	const validationResult = validate({ [id]: value }, { [id]: constraints });
	return validationResult && validationResult[id];
};

export const validatePassword = (id: string, value: string) => {
	const constraints: Constraints = { presence: { allowEmpty: false } };
	if (value !== "") constraints.length = { minimum: 6, message: " must be at least 6 characters" };
	const validationResult = validate({ [id]: value }, { [id]: constraints });
	return validationResult && validationResult[id];
};
