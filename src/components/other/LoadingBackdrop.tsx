import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const LoadingBackdrop: React.FC<{ open: boolean }> = ({ open }) => (
  <Backdrop
    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 999 }}
    open={open}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
);

export default LoadingBackdrop;
