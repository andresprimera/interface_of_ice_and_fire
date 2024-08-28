"use client";

import { Box, Container, List, ListItem, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./swornMembers.module.css";
import useCharacters from "@/hooks/characters";
import { CharacterType } from "@/hooks/characters/types";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export default function SwornMemberContainer({number}: {number: number}) {
  const { character } = useCharacters({ characterNumber: number });
  const router = useRouter();
  const data = character.data as CharacterType;
    
  const isCharacterKey = useCallback((key: string): key is keyof CharacterType => {
    return key in data;
  }, [data]);

  const handleBack = useCallback(()=>{
    router.back()
  },[router]);

  return (
    <Container className={styles.container}>
      <Box className={styles.backButton}>
        <ArrowBackIcon onClick={handleBack} />
      </Box>
      <Stack className={styles.list}>
        <Typography variant="h4" alignSelf={"end"}>
          {data?.name || "No Known Name"}
        </Typography>
        <List>
          {Object.keys(data || {}).map((key, index) => {
            if (isCharacterKey(key))
              return (
                <ListItem key={`${number}-${index}`}>
                  <Stack className={styles.line} direction={"row"} spacing={6}>
                    <Typography>{key}:</Typography>
                    <Typography style ={{textOverflow: 'ellipsis'}}className={styles.content}>{data[key]}</Typography>
                  </Stack>
                </ListItem>
              );
          })}
        </List>
      </Stack>
    </Container>
  );
}
