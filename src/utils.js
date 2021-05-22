export const fetcher = async (input, init) => {
  const res = await fetch(input, init);

  return await res.json();
};
