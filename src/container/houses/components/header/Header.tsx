import { Stack, Typography } from "@mui/material";
import styles from "../../houses.module.css";
import { MutableRefObject } from "react";

export const Header = ({ headerRef }: { headerRef: MutableRefObject<HTMLDivElement | null> }) => {
  return (
    <Stack ref={headerRef} className={styles.header}>
      <Typography>Welcome to</Typography>
      <Typography className={styles.text} variant="h4">
        An Interface of Ice & Fire
      </Typography>
      <Typography className={styles.description}>
        The place where you can see a list of all the houses from the books and their sworn members.
      </Typography>
    </Stack>
  );
};
