import { Box, CircularProgress } from "@mui/material";

export const Loader = () => (
  <Box m={4} display={"flex"} justifyContent={"center"} alignItems={"center"}>
    <CircularProgress />
  </Box>
);
