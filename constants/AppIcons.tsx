// constants/AppIcons.tsx
import { ComponentProps } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import BibleIcon from "@/assets/icons/bible.svg";
import ActiveBibleIcon from "@/assets/icons/active_bible.svg";
import HomeIcon from "@/assets/icons/home.svg";
import ActiveHomeIcon from "@/assets/icons/active_home.svg";
import EbookIcon from "@/assets/icons/ebook.svg";
import ActiveEbookIcon from "@/assets/icons/active_ebook.svg";
import CandleIcon from "@/assets/icons/candle.svg";
import ActiveCandleIcon from "@/assets/icons/active_candle.svg";
import UserIcon from "@/assets/icons/user.svg";
import ActiveUserIcon from "@/assets/icons/active_user.svg";

export type VectorIconPack =
	| "Ionicons"
	| "MaterialCommunityIcons"
	| "FontAwesome";

const VectorIconSets = {
	Ionicons,
	MaterialCommunityIcons,
	FontAwesome,
} as const;

type VectorIconNames =
	| ComponentProps<typeof VectorIconSets.Ionicons>["name"]
	| ComponentProps<typeof VectorIconSets.MaterialCommunityIcons>["name"]
	| ComponentProps<typeof VectorIconSets.FontAwesome>["name"];

interface BaseIconProps {
	size?: number;
	color?: string;
	style?: StyleProp<TextStyle | ViewStyle>;
}

export interface VectorIconProps extends BaseIconProps {
	type: "vector";
	pack: VectorIconPack;
	name: VectorIconNames;
}

export interface CustomIconProps extends BaseIconProps {
	type: "custom";
	variant:
		| "bible"
		| "home"
		| "ebooks"
		| "posts"
		| "profile"
		| "bible-active"
		| "home-active"
		| "ebooks-active"
		| "posts-active"
		| "profile-active";
}

export type IconProps = VectorIconProps | CustomIconProps;
export function Icon(props: IconProps) {
	const { size = 24, color, style } = props;

	if (props.type === "custom") {
		switch (props.variant) {
			case "bible":
				return <BibleIcon width={size} height={size} style={style} />;
			case "posts":
				return <CandleIcon width={size} height={size} style={style} />;
			case "ebooks":
				return <EbookIcon width={size} height={size} style={style} />;
			case "profile":
				return <UserIcon width={size} height={size} style={style} />;
			case "home":
				return <HomeIcon width={size} height={size} style={style} />;
			case "bible-active":
				return <ActiveBibleIcon width={size} height={size} style={style} />;
			case "posts-active":
				return <ActiveCandleIcon width={size} height={size} style={style} />;
			case "ebooks-active":
				return <ActiveEbookIcon width={size} height={size} style={style} />;
			case "profile-active":
				return <ActiveUserIcon width={size} height={size} style={style} />;
			case "home-active":
				return <ActiveHomeIcon width={size} height={size} style={style} />;
			default:
				return null;
		}
	}

	const IconComponent = VectorIconSets[props.pack];
	return (
		<IconComponent
			name={props.name as any}
			size={size}
			color={color}
			style={style}
		/>
	);
}
