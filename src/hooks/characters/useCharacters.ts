"use client";

import { useQuery } from "@tanstack/react-query";
import { getCharacter, getSwornMembers } from "./characters.service";
import { UseCharacterProps } from "./types";

export const useCharacters = ({swornMembersArray, characterNumber}: UseCharacterProps) => {

  const character = useQuery({
    queryKey: ["character", characterNumber],
    queryFn: () => getCharacter(characterNumber || 0),
    enabled: Boolean(characterNumber),
  });

  const swornMembers = useQuery({
    queryKey: ["characters", swornMembersArray],
    queryFn: () => getSwornMembers(swornMembersArray || []),
    enabled: Boolean(swornMembersArray),
  });

  return {
    character,
    swornMembers,
  };
};
