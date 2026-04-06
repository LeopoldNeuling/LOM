import { Typography, Button } from "@mui/material";
import { isMobile } from "../helper/helperFunc";

export default function Link({ text, scrollID, trigger }) {
  function scroll() {
    const element = document.getElementById(scrollID);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }

  const margin = isMobile() ? { marginBottom: "2vh" } : { marginLeft: "10px" };

  return (
    <Button
      variant={trigger == scrollID ? "contained" : "outlined"}
      sx={{ ...margin }}
      onClick={scroll}
    >
      <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
        {text}
      </Typography>
    </Button>
  );
}
