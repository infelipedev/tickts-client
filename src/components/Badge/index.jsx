import { Badge as ChakraBadge, HStack } from "@chakra-ui/react";

export const Badge = ({
  leftDecoration,
  rightDecoration,
  text,
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
      <span>{text}</span>
      {rightDecoration}
    </ChakraBadge>
  );
};
