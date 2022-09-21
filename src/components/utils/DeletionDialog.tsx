import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
  Slide,
} from "@mui/material";
import { Dispatch, forwardRef, SetStateAction } from "react";
import { todosObj } from "../../utils/types";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...(props as any)} />;
});

type propsType = {
  showDeleteDialog: boolean;
  setShowDeleteDialog: Dispatch<SetStateAction<boolean>>;
  todo: todosObj;
  todos: todosObj[];
  setTodos: Dispatch<SetStateAction<todosObj[]>>;
};

export const DeletionDialog = ({
  showDeleteDialog,
  setShowDeleteDialog,
  todo,
  todos,
  setTodos,
}: propsType) => {
  return (
    <Dialog
      open={showDeleteDialog}
      onClose={() => setShowDeleteDialog(false)}
      TransitionComponent={Transition as any}
    >
      <DialogTitle>Are you sure to Delete the Todo?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          By deleting the todo you won't be able to retrieve it again, procced?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShowDeleteDialog(false)}>
          Keep the todo
        </Button>
        <Button
          onClick={() => {
            setTodos(todos.filter((item: todosObj) => item.id !== todo.id));
            setShowDeleteDialog(false);
          }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
