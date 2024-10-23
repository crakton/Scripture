import React from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";
import { TabBarIcon } from "./TabBarIcon";
import { ThemedText } from "../ThemedText";

const { width } = Dimensions.get("window");

interface TabBarProps {
	state: any;
	descriptors: any;
	navigation: any;
}

export function TabBar({ state, descriptors, navigation }: TabBarProps) {
	return (
		<View style={styles.container}>
			{state.routes.map((route: any, index: number) => {
				const { options } = descriptors[route.key];
				const isFocused = state.index === index;
				const isMiddleTab = index === 2; // posts tab

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				// Get the title from options or capitalize the route name
				const title =
					options.title ||
					route.name.charAt(0).toUpperCase() + route.name.slice(1);

				// Determine which icon variant to use based on the route name
				const variant =
					route.name === "index"
						? isFocused
							? "home-active"
							: "home"
						: isFocused
						? route.name.concat("-active")
						: route.name;

				if (isMiddleTab) {
					return (
						<View key={route.key} style={styles.middleTabContainer}>
							<TouchableOpacity
								onPress={onPress}
								style={[
									styles.middleTab,
									{
										backgroundColor: "white",
									},
								]}
							>
								<TabBarIcon type="custom" variant={variant} size={32} />
							</TouchableOpacity>
						</View>
					);
				}

				return (
					<TouchableOpacity
						key={route.key}
						onPress={onPress}
						style={styles.tab}
					>
						<TabBarIcon type="custom" variant={variant} size={24} />
						<ThemedText style={[styles.label, isFocused && styles.activeLabel]}>
							{title}
						</ThemedText>
					</TouchableOpacity>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: "white",
		height: 80, // Increased height to accommodate labels
		elevation: 8,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: -4,
		},
		shadowOpacity: 0.1,
		shadowRadius: 4,
		paddingBottom: 12, // Add padding at the bottom for labels
	},
	tab: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 8,
	},
	middleTabContainer: {
		flex: 1,
		alignItems: "center",
	},
	middleTab: {
		width: 56,
		height: 56,
		borderRadius: 28,
		marginTop: -28,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	label: {
		fontSize: 12,
		marginTop: 4,
		color: "#666666",
	},
	activeLabel: {
		color: Colors.primary.main,
		fontWeight: "500",
	},
	middleLabel: {
		marginTop: 32, // Adjust based on your needs
	},
});
