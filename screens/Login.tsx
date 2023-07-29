import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Container, LoginInputs, Nista } from "../components";
import { SIZES } from "../constants";
import useLogin from "../hooks/Login";

export default function Login() {
	const { formState, inputChangedHandler, loginHandler, isLoading, colors } = useLogin();
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
			<Container>
				<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginHorizontal: 22 }}>
					<Nista text={"Login in to Continue"} />
					<LoginInputs inputHandler={inputChangedHandler} colors={colors} fsi={formState.inputValidities} />
					<Button
						title="Login"
						filled
						loading={isLoading}
						onPress={loginHandler}
						style={{ width: SIZES.width - 44, marginBottom: SIZES.padding, marginVertical: 8 }}
					/>
				</View>
			</Container>
		</SafeAreaView>
	);
}
