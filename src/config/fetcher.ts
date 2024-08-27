import { Alert } from "@mui/material";

export const fetcher = async<T> (url: string) : Promise<T | null>=> {    
    const response = await fetch(url);
    const json = await response.json();

    //TODO: change the alert by a toast 
    if (response.status >= 400) {
        Alert(json.error);
        return null;
    }
    return json
}