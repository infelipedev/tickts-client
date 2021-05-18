import { Box, Circle, Heading, HStack, Text } from "@chakra-ui/react";

export const Post = ({ id, body, title }) => {
  return (
    <Box as="li" borderWidth="1px" padding="4" shadow="md">
      <HStack marginBottom="4" spacing="4">
        <Circle
          aria-hidden
          backgroundColor="gray.200"
          fontSize="xl"
          fontWeight="bold"
          size="12"
        >
          {id}
        </Circle>
        <Heading fontSize="xl">{title}</Heading>
      </HStack>
      <Text>{body}</Text>
    </Box>
  );
};
