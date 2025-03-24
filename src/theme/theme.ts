import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette:{
  mode: "dark"
  },
  breakpoints: {
    values: {
        xs: 0,
        sm: 426,
        md: 900,
        lg: 1200,
        xl: 1536,
    }
}}
)