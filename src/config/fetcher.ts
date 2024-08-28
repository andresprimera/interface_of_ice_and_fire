import { Alert } from "@mui/material";

export const fetcher = async <T>(url: string): Promise<T | null> => {
  const response = await fetch(url);
  const json = await response.json();

  if (response.status >= 400) {
    Alert(json.error);
    return null;
  }
  return json;
};
