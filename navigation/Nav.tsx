import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome, Login, Register, Chat } from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./Tabs";

const Stack = createNativeStackNavigator();

export default function Nav() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Welcome" component={Welcome} />
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Tabs" component={Tabs} />
				<Stack.Screen name="Chat" component={Chat} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
