import { Paper, Box } from "@mui/material";
import { AddItem } from "./utils/AddItem";
import { Completed } from "./utils/Completed";
import { Header } from "./utils/Header";
import { Todo } from "./utils/Todo";

export const Dashboard = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: "#e3e3e3" }}
    >
      <Paper
        elevation={2}
        sx={{
          width: { xs: "100%", sm: "500px" },
          height: "100%",
          margin: "1.5rem 0.5rem",
          padding: "1rem",
          borderRadius: "1rem",
        }}
      >
        <Header />
        <AddItem />
        <Todo />
        <Completed />
      </Paper>
    </Box>
  );
};
