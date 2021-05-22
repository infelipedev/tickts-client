import { fetcher } from "utils";

export default async function (req, res) {
  const { id } = req.query;
  const event = await fetcher(`${process.env.BASE_URL}/events/${id}`);

  return res.status(200).json(event);
}
