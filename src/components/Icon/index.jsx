import { Icon as ChakraIcon } from "@chakra-ui/react";
import { forwardRef } from "react";

export const IconName = {
	EXCLAMATION_CIRCLE: "exclamationCircle",
	QUESTION_MARK_CIRCLE: "questionMarkCircle",
	TICKET: "ticket",
};

export const IconType = { OUTLINE: "outline", SOLID: "solid" };

const icons = {
	[IconType.OUTLINE]: {
		[IconName.EXCLAMATION_CIRCLE]: [
			"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
		],
		[IconName.QUESTION_MARK_CIRCLE]: [
			"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
		],
		[IconName.TICKET]: [
			"M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z",
		],
	},
	[IconType.SOLID]: {
		[IconName.EXCLAMATION_CIRCLE]: [
			"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
		],
		[IconName.QUESTION_MARK_CIRCLE]: [
			"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
		],
		[IconName.TICKET]: [
			"M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z",
		],
	},
};

export const Icon = forwardRef(function Icon(
	{
		boxSize,
		name = IconName.QUESTION_MARK_CIRCLE,
		type = IconType.SOLID,
		...otherProps
	},
	forwardedRef
) {
	const isSolid = type === IconType.SOLID;
	const pathProps = isSolid
		? { clipRule: "evenodd", fillRule: "evenodd" }
		: { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" };
	const svgProps = isSolid
		? { fill: "currentColor", stroke: "none", viewBox: "0 0 20 20" }
		: { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" };
	const paths =
		icons[type][name] || icons[IconType.SOLID][IconName.QUESTION_MARK_CIRCLE];

	return (
		<ChakraIcon
			{...otherProps}
			{...svgProps}
			ref={forwardedRef}
			boxSize={boxSize ? boxSize : isSolid ? "5" : "6"}
			xmlns="http://www.w3.org/2000/svg"
		>
			{paths.map((path) => {
				return <path {...pathProps} key={path} d={path} />;
			})}
		</ChakraIcon>
	);
});
