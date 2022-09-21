import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Slide,
} from "@mui/material";
import { Dispatch, forwardRef, SetStateAction, useState } from "react";
import { useCtx } from "../../context/Provider";
import { todosObj } from "../../utils/types";

type propsType = {
  showEditionDialog: boolean;
  setShowEditionDialog: Dispatch<SetStateAction<boolean>>;
  todo: todosObj;
  todos: todosObj[];
  setTodos: Dispatch<SetStateAction<todosObj[]>>;
};

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...(props as any)} />;
});

export const EditionDialog = ({
  showEditionDialog,
  setShowEditionDialog,
  todo,
  todos,
  setTodos,
}: propsType) => {
  const [updateText, setUpdateText] = useState("");
  const [error, setError] = useState("");
  const { setSnackBarOpen } = useCtx();

  const editHandler = () => {
    if (updateText) {
      if (todos.find((item: todosObj) => item.text === updateText)) {
        setError("Todo already exists!");
        setSnackBarOpen(true);
        return;
      }

      setTodos(
        todos.map((item: todosObj) => {
          if (item.id === todo.id) {
            return {
              ...item,
              text: updateText,
            };
          }
          return item;
        })
      );
    }
    setUpdateText("");
    setShowEditionDialog(false);
  };

  return (
    <Dialog
      open={showEditionDialog}
      onClose={() => setShowEditionDialog(false)}
      TransitionComponent={Transition as any}
    >
      <DialogTitle>Update Todo</DialogTitle>
      <DialogContent>
        <TextField
          value={updateText}
          onChange={(e) => setUpdateText(e.target.value)}
          label="New Value"
          type="text"
          margin="dense"
          fullWidth
          error={!!error}
          helperText={!!error && error}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShowEditionDialog(false)}>Cancel</Button>
        <Button type="submit" onClick={editHandler}>
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};
