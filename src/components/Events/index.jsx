import { Box, VStack } from "@chakra-ui/react";
import Link from "next/link";

import { Event } from "components/Events/Event";

export const Events = ({ events = [] }) => {
  return (
    <VStack spacing="4">
      {events.map(({ id, banner, name, truncatedAttendeeCapacity }) => {
        return (
          <Link key={id} href={`/events/${id}`} passHref>
            <Box as="a" width="100%">
              <Event
                id={id}
                attendeeCapacity={truncatedAttendeeCapacity}
                banner={banner}
                name={name}
              />
            </Box>
          </Link>
        );
      })}
    </VStack>
  );
};
