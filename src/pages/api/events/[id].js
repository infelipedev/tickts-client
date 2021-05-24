import { fetcher } from "utils";

export default async function (request, response) {
  const { id } = request.query;
  const event = await fetcher(`${process.env.BASE_URL}/events/${id}`);

  return response.status(200).json(event);
}
