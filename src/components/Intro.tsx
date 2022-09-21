import { Box, CircularProgress } from "@mui/material";

export const Intro = () => {
  return (
    <Box
      bgcolor={"primary.light"}
      width="100%"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress sx={{ color: "white" }} />
    </Box>
  );
};
