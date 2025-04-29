import { api } from "@utils/api";
import { useEffect, useState } from "react"

interface UserFetchProps {
    method: "GET" | "POST" | "PUT" | "DELETE"
    url: string,
    payload?: {}
}

export default function useFetch<T>({ method, url, payload }: UserFetchProps) {
    const [ data, setData ]             = useState<T | null>(null);
    const [ error, setError ]           = useState<unknown>(null);
    const [ isLoading, setIsLoading ]   = useState(true);

    async function handleFetch() {
        try {
            const response = await api({ method, url , data: payload });
            setData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        handleFetch();
    }, []);

    return { data, error, isLoading };
}