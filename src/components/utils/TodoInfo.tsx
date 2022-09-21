import { Stack, Typography, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useCtx } from "../../context/Provider";
import { todosObj } from "../../utils/types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { DeletionDialog } from "./DeletionDialog";
import { EditionDialog } from "./EditionDialog";

export const TodoInfo = ({ todo }: any) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState<boolean>(false);
  const [showEditionDialog, setShowEditionDialog] = useState<boolean>(false);
  const { todos, setTodos } = useCtx();

  const completedHandler = () => {
    setTodos(
      todos.map((item: todosObj) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row" alignItems="center">
        <IconButton onClick={completedHandler}>
          {todo.completed ? (
            <CheckCircleIcon color="primary" />
          ) : (
            <CheckCircleOutlineIcon />
          )}
        </IconButton>
        {!todo.completed && <Typography>{todo.text}</Typography>}
        {!!todo.completed && (
          <Typography sx={{ textDecoration: "line-through" }}>
            {todo.text}
          </Typography>
        )}
      </Stack>
      <Stack direction="row">
        <IconButton onClick={() => setShowEditionDialog(true)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => setShowDeleteDialog(true)}>
          <DeleteIcon color="error" />
        </IconButton>
      </Stack>

      <DeletionDialog
        showDeleteDialog={showDeleteDialog}
        setShowDeleteDialog={setShowDeleteDialog}
        todo={todo}
        todos={todos}
        setTodos={setTodos}
      />

      <EditionDialog
        showEditionDialog={showEditionDialog}
        setShowEditionDialog={setShowEditionDialog}
        todo={todo}
        todos={todos}
        setTodos={setTodos}
      />
    </Stack>
  );
};
