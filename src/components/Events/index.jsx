import { VStack } from "@chakra-ui/react";

import { Event } from "components/Events/Event";

export const Events = ({ events = [] }) => {
  return (
    <VStack spacing="4">
      {events.map(({ id, image, name, truncatedAttendeeCapacity }) => {
        return (
          <Event
            key={id}
            id={id}
            image={image}
            name={name}
            truncatedAttendeeCapacity={truncatedAttendeeCapacity}
          />
        );
      })}
    </VStack>
  );
};
