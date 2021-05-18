import useSWR from "swr";

import { fetcher } from "utils";

export const usePosts = (initialData) => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher,
    { initialData }
  );

  return { data, error, isLoading: !data && !error };
};
