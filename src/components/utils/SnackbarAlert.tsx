import { Alert, Snackbar } from "@mui/material";
import { forwardRef } from "react";
import { useCtx } from "../../context/Provider";

const SnackAlert = forwardRef(function SnackbarAlert(props: any, ref) {
  return <Alert ref={ref} elevation={2} {...(props as any)} />;
});

type propsType = {
  text: string;
  severity: string;
};

export const SnackbarAlert = ({ text, severity }: propsType) => {
  const { snackBarOpen, setSnackBarOpen } = useCtx();

  return (
    <Snackbar
      open={snackBarOpen}
      autoHideDuration={2000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <SnackAlert
        severity={severity}
        onClose={(e: any, reason: string) => {
          if (reason === "clickaway") {
            return;
          }
          setSnackBarOpen(false);
        }}
      >
        {text}
      </SnackAlert>
    </Snackbar>
  );
};
