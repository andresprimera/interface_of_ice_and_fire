'use client'

import { fetcher } from "@/config/fetcher";
import { CharacterType, PaginationProps } from "./types";

export const getCharacters = async ({ page, pageSize }: PaginationProps)=> fetcher<CharacterType>(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=${pageSize}`)
