import useSWR from "swr";

import { fetcher } from "utils";

export const useEvent = (initialData) => {
  const { id } = initialData;
  const { data, error } = useSWR(`/api/events/${id}`, fetcher, { initialData });

  return { data, error, isLoading: !data && !error };
};

export const useEvents = (initialData) => {
  const { data, error } = useSWR("/api/events", fetcher, { initialData });

  return { data, error, isLoading: !data && !error };
};
