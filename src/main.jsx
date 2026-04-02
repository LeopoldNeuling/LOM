import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f4f1ec",
      contrastText: "#2e3f4e",
    },
    secondary: {
      main: "#2e3f4e",
      contrastText: "#f4f1ec",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: "secondary",
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
);
