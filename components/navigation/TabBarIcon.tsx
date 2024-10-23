// TabBarIcon.tsx
import {
	Dimensions,
	StyleProp,
	StyleSheet,
	TextStyle,
	ViewStyle,
} from "react-native";
import {
	Icon,
	IconProps,
	CustomIconProps,
	VectorIconProps,
} from "@/constants/AppIcons";

type TabBarIconProps = {
	type: "custom" | "vector";
	// color?: string;
	size?: number;
	style?: StyleProp<TextStyle | ViewStyle>;
	focused?: boolean;
} & Partial<Pick<VectorIconProps, "pack" | "name">> &
	Partial<Pick<CustomIconProps, "variant">>;

export function TabBarIcon({ style, ...props }: TabBarIconProps) {
	const iconProps: IconProps =
		props.type === "vector"
			? {
					type: "vector",
					pack: props.pack!,
					name: props.name!,
					size: props.size,
					// color: props.color,
			  }
			: {
					type: "custom",
					variant: props.variant!,
					size: props.size,
					// color: props.color,
			  };

	return <Icon {...iconProps} style={[{ marginBottom: -3 }, style]} />;
}
const { width } = Dimensions.get("window");

export interface TabBarProps {
	state: any;
	descriptors: any;
	navigation: any;
}

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		height: 60,
		paddingBottom: 8,
		borderTopWidth: 0,
		elevation: 8,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: -4,
		},
		shadowOpacity: 0.1,
		shadowRadius: 4,
	},
	tab: {
		flex: 1,
		justifyContent: "center",
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
});
