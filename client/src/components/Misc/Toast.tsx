import React, { useState } from "react";
import { Alert, Snackbar } from "@mui/material";

interface Props {
  message: string;
  severity: "error" | "info" | "success";
}

const Toast = ({ message, severity }: Props) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        variant="filled"
        onClose={handleClose}
        sx={{ width: "100%" }}
        severity={severity}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
export default Toast;
