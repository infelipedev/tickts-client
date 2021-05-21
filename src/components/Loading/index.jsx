import { Center, Spinner, Text } from "@chakra-ui/react";

export const Loading = ({ message = "Carregando. Por favor, aguarde..." }) => {
  return (
    <Center flexDirection="column" minHeight="100vh">
      <Spinner marginBottom="8" size="xl" />
      <Text>{message}</Text>
    </Center>
  );
};
