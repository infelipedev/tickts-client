import { Badge as ChakraBadge, HStack } from "@chakra-ui/react";

export const Badge = ({
	content,
	leftDecoration,
	rightDecoration,
	...otherProps
}) => {
	return (
		<ChakraBadge
			{...otherProps}
			as={HStack}
			display="inline-flex"
			fontSize="0.875em"
			lineHeight="1"
			paddingX="2"
			paddingY="1"
		>
			{leftDecoration}
			<span>{content}</span>
			{rightDecoration}
		</ChakraBadge>
	);
};
