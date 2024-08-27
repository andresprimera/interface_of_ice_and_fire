'use client'

import { useCharacters } from "@/hooks/characters/useCharacters"

export default function CharactersPage(){

    const { characters } = useCharacters({ page: 1, pageSize: 10})

    console.log(characters.data)

    return <h1>Andres</h1>
}