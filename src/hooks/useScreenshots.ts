import { Screenshots } from "@/entities/Screenshot";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";


const useScreenshots = (gameId: number) => {
    const apiClient = new APIClient<Screenshots>(`/games/${gameId}/screenshots`)

    return useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: apiClient.getAll
    })
}

export default useScreenshots;