import { Center, CircularProgress, Text } from "@chakra-ui/react";

export const Loading = ({ message = "Carregando. Por favor, aguarde..." }) => {
	return (
		<Center flexDirection="column" minHeight="100vh">
			<CircularProgress
				color="green.500"
				isIndeterminate
				marginBottom="8"
				size="12"
			/>
			<Text>{message}</Text>
		</Center>
	);
};
