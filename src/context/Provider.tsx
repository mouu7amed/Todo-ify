import { createContext, useContext, useEffect, useState } from "react";
import { todosObj } from "../utils/types";

type providerProps = {
  children: React.ReactNode;
};

const AppCtx = createContext<any>({});

export const CtxProvider = ({ children }: providerProps) => {
  const [inputText, setInputText] = useState("");
  const [id, setId] = useState(1 + Math.random());
  const [todos, setTodos] = useState<todosObj[]>(
    () =>
      JSON.parse(localStorage.getItem("todos")!) || [
        { id: 123, text: "Demo Todo", completed: false },
      ]
  );
  const [completedTodos, setCompletedTodos] = useState<todosObj[]>([]);
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    setCompletedTodos(todos.filter((item) => item.completed === true));
  }, [todos]);

  return (
    <AppCtx.Provider
      value={{
        inputText,
        setInputText,
        id,
        setId,
        todos,
        setTodos,
        completedTodos,
        snackBarOpen,
        setSnackBarOpen,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};

export const useCtx = () => {
  return useContext(AppCtx);
};
