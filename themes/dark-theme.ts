import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const darktTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: grey[900],
    },
  },
});
