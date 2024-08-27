'use client'

import { useQuery } from "@tanstack/react-query"
import { getCharacters } from "./charactersService"
import { PaginationProps } from "./types"

export const useCharacters = (params : PaginationProps)=>{
    const characters = useQuery({
        queryKey: ['characters'],
        queryFn: ()=> getCharacters(params),
        enabled: true
    })

    return {
        characters
    }
}