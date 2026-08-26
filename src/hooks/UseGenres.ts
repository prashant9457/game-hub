import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";
import genres from "@/data/genres";

export interface Genres {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient
        .get<FetchResponse<Genres>>('/genres')
        .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: {count : genres.length, results: genres}
})

export default useGenres;