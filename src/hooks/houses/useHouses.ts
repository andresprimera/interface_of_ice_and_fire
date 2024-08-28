'use client'

import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchHouses } from "./houses.service"

export const useHouses = ()=>{
      const {
        data,
        fetchNextPage,
        isFetching,
        isFetchingNextPage,
      } = useInfiniteQuery({
        queryKey: ['houses'],
        queryFn: fetchHouses,
        initialPageParam: 0,
        getNextPageParam: (pages) => {
           return pages.length + 1
        },
      })

    return {
        houses: data,
        isFetching,
        isFetchingNextPage,
        fetchNextPage
    }
}