export const http = (
  url: string,
  options: RequestInit = {}
): Promise<Response> => {
  const headers = (options.headers as Record<string, string>) ?? {};
  const contentType = headers["Content-Type"];

  if (contentType == null) {
    headers["Content-Type"] = "application/json";
  } else if (contentType === "multipart/form-data") {
    delete headers["Content-Type"];
  }

  options.headers = {
    Accept: "application/json",
    ...headers,
  };

  return fetch(`${url}`, options);
};
