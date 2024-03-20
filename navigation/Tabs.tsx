import { View, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { Home, Profile, Saved } from "../screens";
import { useTheme } from "../themes/ThemeProvider";

const Tab = createBottomTabNavigator();

export default function Tabs() {
	const { colors } = useTheme();
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				headerShown: false,
				tabBarStyle: {
					position: "absolute",
					bottom: 0,
					right: 0,
					left: 0,
					elevation: 0,
					height: 60,
					backgroundColor: colors.background,
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name="chatbubble-ellipses-outline"
							size={24}
							color={focused ? COLORS.primary : COLORS.secondaryBlack}
						/>
					),
				}}
			/>

			<Tab.Screen
				name="Saved"
				component={Saved}
				options={{
					tabBarIcon: ({ }) => (
						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
								backgroundColor: COLORS.primary,
								height: Platform.OS == "ios" ? 50 : 60,
								width: Platform.OS == "ios" ? 50 : 60,
								top: Platform.OS == "ios" ? -10 : -20,
								borderRadius: Platform.OS == "ios" ? 25 : 30,
								borderWidth: 2,
								borderColor: COLORS.white,
							}}
						>
							<Ionicons name="bookmark-outline" size={24} color={COLORS.white} />
						</View>
					),
				}}
			/>

			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name="person-outline"
							size={24}
							color={focused ? COLORS.primary : COLORS.secondaryBlack}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}
