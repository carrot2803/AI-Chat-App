import { ref, getDatabase, child, set } from "firebase/database";

export const createUser = async (fullName: string, email: string, userId: string) => {
	const userData = { fullName, email, userId, signUpDate: new Date().toISOString() };

	const dbRef = ref(getDatabase());
	const childRef = child(dbRef, `users/${userId}`);
	await set(childRef, userData);

	return userData;
};
