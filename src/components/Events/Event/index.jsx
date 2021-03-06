import { Box, Heading, HStack } from "@chakra-ui/react";

import { Badge, Icon, IconName, Image } from "components";

export const Event = ({
	attendeeCapacity,
	banner = "/event-banner-placeholder.svg",
	name,
}) => {
	return (
		<Box
			backgroundColor="white"
			borderBottomRadius="md"
			boxShadow="md"
			width="100%"
		>
			<Box position="relative" width="100%" height="32">
				<Image
					alt={name}
					borderTopRadius="md"
					layout="fill"
					objectFit="cover"
					src={banner}
				/>
			</Box>
			<HStack padding="4" spacing="auto">
				<Heading fontSize="md">{name}</Heading>
				<Badge
					colorScheme="blue"
					content={attendeeCapacity}
					leftDecoration={<Icon name={IconName.TICKET} />}
				/>
			</HStack>
		</Box>
	);
};
