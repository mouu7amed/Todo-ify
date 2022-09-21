import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Intro } from "./Intro";
import { Dashboard } from "./Dashboard";
import { CtxProvider } from "../context/Provider";

function App() {
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIntro(false);
    }, 1000);
  }, []);

  return (
    <CtxProvider>
      <Box>{intro ? <Intro /> : <Dashboard />}</Box>
    </CtxProvider>
  );
}

export default App;
