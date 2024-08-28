"use client";

import { fetcher } from "@/config/fetcher";
import { CharacterType } from "./types";

export const getCharacter = async (characterNumber: number): Promise<(CharacterType | null)> => {
  return fetcher<CharacterType>(`https://www.anapioficeandfire.com/api/characters/${characterNumber}`);
};
export const getSwornMembers = async (swornMembersArray: string[]): Promise<(CharacterType | null)[]> => {
  return Promise.all(swornMembersArray.map((characterUrl) => fetcher<CharacterType>(characterUrl)));
};
