'use client'

import { fetcher } from "@/config/fetcher";
import { CharacterType } from "./types";

export const getCharacters = async ( characterUrl: string)=> fetcher<CharacterType>(characterUrl)
export const getSwornMembers= async ( swornMembersArray: string[]) : Promise<(CharacterType | null)[]>=> {
    return Promise.all(swornMembersArray.map((characterUrl)=> fetcher<CharacterType>(characterUrl)))
}
