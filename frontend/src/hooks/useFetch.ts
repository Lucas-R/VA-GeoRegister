import { useEffect, useState } from "react";
import { api } from "@utils/api";

interface UserFetchProps {
    method: "GET" | "POST" | "PUT" | "DELETE"
    url: string,
}

export default function useFetch<T>({ method, url }: UserFetchProps) {
    const [ data, setData ]             = useState<T | null>(null);
    const [ error, setError ]           = useState<unknown>(null);
    const [ isLoading, setIsLoading ]   = useState(true);

    async function handleFetch() {
        try {
            const response = await api({ method, url });
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