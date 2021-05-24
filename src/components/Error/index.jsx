import { Center, Text } from "@chakra-ui/react";

import { Icon, IconName, IconType } from "components";

export const Error = ({ message = "Oops! Algo deu errado..." }) => {
	return (
		<Center flexDirection="column" minHeight="100vh">
			<Icon
				boxSize="12"
				color="red.500"
				marginBottom="8"
				name={IconName.EXCLAMATION_CIRCLE}
				type={IconType.OUTLINE}
			/>
			<Text>{message}</Text>
		</Center>
	);
};
