export function toQueryString(
  params: string | Record<string, string | number | boolean>
): string {
  if (typeof params === "string") {
    // Convert query string to an object
    const obj: Record<string, string> = {};
    const pairs = params.split("&");
    pairs.forEach((pair) => {
      const [key, value] = pair.split("=");
      obj[key] = decodeURIComponent(value);
    });
    params = obj;
  }

  // Assuming params is now an object
  const queryString = Object.keys(params)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(
          String((params as Record<string, string | number | boolean>)[key])
        )}`
    )
    .join("&");

  return queryString;
}
