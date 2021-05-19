export const fetcher = async (input, init) => {
  const response = await fetch(input, init);

  return await response.json();
};
