import { Typography, Button } from "@mui/material";
import { NavItemMargin } from "../helper/styles";

export default function Link({ text, scrollID, trigger }) {
  function scroll() {
    const element = document.getElementById(scrollID);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <Button
      variant={trigger == scrollID ? "contained" : "outlined"}
      sx={{ ...NavItemMargin }}
      onClick={scroll}
    >
      <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
        {text}
      </Typography>
    </Button>
  );
}
