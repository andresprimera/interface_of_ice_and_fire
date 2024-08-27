export const fetcher = async<T> (url: string) : Promise<T[]>=> {    
    const response = await fetch(url);
    const json = await response.json();

    //TODO: change the alert by a toast 
    if (response.status >= 400) {
        alert( json.error);
        return [];
    }
    return json
}