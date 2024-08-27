'use client'

import { useQuery } from "@tanstack/react-query"
import { getSwornMembers } from "./characters.service"

export const useCharacters = (swornMembersArray?: string[])=>{
    const swornMembers = useQuery({
        queryKey: ['characters', swornMembersArray ],
        queryFn: ()=> getSwornMembers(swornMembersArray || []),
        enabled: Boolean(swornMembersArray)
    })

    return {
        swornMembers
    }
}