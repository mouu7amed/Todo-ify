import { Stack, Typography, Divider, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useCtx } from "../../context/Provider";
import { todosObj } from "../../utils/types";
import { SnackbarAlert } from "./SnackbarAlert";

export const AddItem = () => {
  const {
    inputText,
    setInputText,
    id,
    setId,
    todos,
    setTodos,
    setSnackBarOpen,
  } = useCtx();
  const [error, setError] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");

  const addTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setId(id + Math.random() * 10);

    if (inputText) {
      if (todos.find((item: todosObj) => item.text === inputText)) {
        setError("Todo already exists!");
        setSnackBarOpen(true);
        return;
      }

      setTodos([
        ...todos,
        {
          id: id,
          text: inputText,
          completed: false,
        },
      ]);
      setError("");
      setSuccessMsg("Todo added successfully");
      setSnackBarOpen(true);
    } else {
      setError("Todo text can not be empty!");
      setSnackBarOpen(true);
    }

    setInputText("");
  };

  return (
    <Stack>
      <Typography fontWeight={500}>ADD ITEM</Typography>
      <Divider
        sx={{
          border: "none",
          height: "2px",
          color: " #333",
          backgroundColor: "#333",
          mt: 1,
          mb: 2,
        }}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        component="form"
        onSubmit={addTodoHandler}
      >
        <TextField
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          label="Todo Text ..."
          sx={{ width: "100%" }}
          error={!!error}
          helperText={!!error && error}
        />
        <Button type="submit">ADD</Button>
      </Stack>
      {!!successMsg && !error && (
        <SnackbarAlert text={successMsg} severity="success" />
      )}
    </Stack>
  );
};
