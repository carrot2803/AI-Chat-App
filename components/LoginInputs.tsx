import Input from "./Input";

type Inputs = { fsi: any; inputHandler: (inputId: string, inputValue: string) => void; colors: any };

export const LoginInputs = ({ inputHandler, colors, fsi }: Inputs) => (
	<>
		<Input
			onInputChanged={inputHandler}
			errorText={fsi["email"]}
			id="email"
			placeholder="Enter your email"
			placeholderTextColor={colors}
		/>

		<Input
			onInputChanged={inputHandler}
			errorText={fsi["password"]}
			id="password"
			placeholder="Enter your password"
			placeholderTextColor={colors}
			secureTextEntry
		/>
	</>
);
