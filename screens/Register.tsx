import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../constants";
import { Button, Container, Input, Nista } from "../components";
import { useRegister } from "../hooks/Register";

export default function Register() {
	const { formState, inputChangedHandler, authHandler, isLoading, colors } = useRegister();

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
			<Container>
				<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginHorizontal: 22 }}>
					<Nista text={"Register to Continue"} />
					<Input
						onInputChanged={inputChangedHandler}
						errorText={formState.inputValidities["fullName"]}
						id="fullName"
						placeholder="Enter your full name"
						placeholderTextColor={colors.text}
					/>
					<Input
						onInputChanged={inputChangedHandler}
						errorText={formState.inputValidities["email"]}
						id="email"
						placeholder="Enter your email"
						placeholderTextColor={colors.text}
					/>
					<Input
						onInputChanged={inputChangedHandler}
						errorText={formState.inputValidities["password"]}
						id="password"
						placeholder="Enter your password"
						placeholderTextColor={colors.text}
						secureTextEntry
					/>
					<Button
						title="Register"
						onPress={authHandler}
						loading={isLoading}
						filled
						style={{ width: SIZES.width - 44, marginBottom: SIZES.padding, marginVertical: 8 }}
					/>
				</View>
			</Container>
		</SafeAreaView>
	);
}
