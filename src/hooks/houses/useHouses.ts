'use client'

import { useQuery } from "@tanstack/react-query"
import { getHouses } from "./houses.service"
import { PaginationProps } from "./types"

export const useHouses = ({ page, pageSize } : PaginationProps)=>{
    const houses = useQuery({
        queryKey: ['houses', page, pageSize],
        queryFn: ()=> getHouses({ page, pageSize }),
        enabled: true
    })

    return {
        houses
    }
}