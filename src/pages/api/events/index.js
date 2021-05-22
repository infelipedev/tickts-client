import { fetcher } from "utils";

export default async function (_, res) {
  const events = await fetcher(`${process.env.BASE_URL}/events`);

  return res.status(200).json(
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
