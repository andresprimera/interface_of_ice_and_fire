import Loader from "@/components/loader";
import { useCharacters } from "@/hooks/characters/useCharacters";
import { HousesTypes } from "@/hooks/houses/types";
import { Box, Card, CardContent, Divider, List, Stack, Typography } from "@mui/material";
import styles from "./house.module.css";
import { SwornMemberRow } from "./swornMemberRow";

export const HouseCard = ({ name, swornMembers: swornMembersArray }: HousesTypes) => {
  const { swornMembers } = useCharacters({swornMembersArray});

  return (
    <Card className={styles.card}>
      <CardContent>
        <Stack>
          <Typography alignSelf={"end"} variant="h6">
            {name}
          </Typography>
          <Typography alignSelf={"end"} variant="caption">
            Sworn Members
          </Typography>
          <Divider />
          {swornMembers.isLoading ? (
            <Loader />
          ) : swornMembersArray.length !== 0 ? (
            <List>
              {swornMembers?.data?.map((member) => (
                <SwornMemberRow key={member?.url} {...member} />
              ))}
            </List>
          ) : (
            <Box m={4} display="flex" justifyContent={"center"} alignItems={"center"}>
              <Typography>This house has no sworn members</Typography>
            </Box>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};
