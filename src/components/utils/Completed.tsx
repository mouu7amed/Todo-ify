import { Stack, Typography, Divider } from "@mui/material";
import { useCtx } from "../../context/Provider";
import { TodoInfo } from "./TodoInfo";
import { todosObj } from "../../utils/types";

export const Completed = () => {
  const { completedTodos } = useCtx();

  return (
    <Stack spacing={1}>
      <Typography fontWeight={500}>COMPLETED</Typography>
      <Divider
        sx={{
          border: "none",
          height: "2px",
          color: " #333",
          backgroundColor: "#333",
        }}
      />
      {completedTodos.map((todo: todosObj) => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </Stack>
  );
};
