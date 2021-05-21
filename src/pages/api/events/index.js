import { fetcher } from "utils";

export default async function (_, response) {
  const events = await fetcher(
    "https://my-json-server.typicode.com/infelipedev/tickts-mocked-server/events"
  );

  return response.status(200).json(
    events.reduce((events, event) => {
      const { maximumAttendeeCapacity } = event;

      return [
        ...events,
        {
          ...event,
          truncatedAttendeeCapacity:
            maximumAttendeeCapacity > 99 ? "99+" : maximumAttendeeCapacity,
        },
      ];
    }, [])
  );
}
