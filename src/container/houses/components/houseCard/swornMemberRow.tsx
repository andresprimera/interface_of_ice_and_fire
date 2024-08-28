"use client";

import { CharacterType } from "@/hooks/characters/types";
import { extractCharacterNumber } from "@/utils";
import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export const SwornMemberRow = ({ name, died, url }: Partial<CharacterType>) => {

  const router = useRouter()
  return (
    <Stack
      onClick={() => router.push(`sworn-member/${extractCharacterNumber(url)}`)}
      my={1.5}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      minHeight={50}
    >
      <Typography>{name} </Typography>
      <Stack>
        {died ? (
          <Stack alignItems={"end"} justifyContent={"center"}>
            <Typography>Dead</Typography>
            <Typography variant="caption">{died}</Typography>
          </Stack>
        ) : (
          <Typography>Alive</Typography>
        )}
      </Stack>
    </Stack>
  );
};
