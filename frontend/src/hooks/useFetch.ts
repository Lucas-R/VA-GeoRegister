import { useEffect, useState } from "react";
import { api } from "@utils/api";

interface UserFetchProps {
    method: "GET" | "POST" | "PUT" | "DELETE"
    path: string,
    limit?: number 
}

export default function useFetch<T>({ method, path, limit = 100 }: UserFetchProps) {
    const [ data, setData ] = useState<{ result: T, total: number, page: number, prev: boolean, next: boolean } | null>(null);
    const [ error, setError ] = useState<unknown>(null);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ page, setPage ] = useState(1);

    function prev() {
        data?.prev && setPage(prev => prev - 1);
    }

    function next() {
        data?.next && setPage(prev => prev + 1);
    }

    async function handleFetch() {
        try {
            const response = await api({ method, url: path + `?page=${page}&limit=${limit}` });
            setData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        handleFetch();
    }, [page]);

    return { data, error, isLoading, prev, next };
}