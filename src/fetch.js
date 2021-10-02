const isJson = (response) => {
  const contentType = response.headers.get("content-type");
  return contentType && contentType.includes("application/json");
};

export const fetchJson = async (...args) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(
      `HTTP Error Response: ${response.status} ${response.statusText}`
    );
  }

  if (isJson(response)) {
    return {
      response,
      json: await response.json(),
    };
  }

  return { response, json: null };
};
