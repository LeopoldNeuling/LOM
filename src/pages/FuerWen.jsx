import { Box } from "@mui/material";
import { pageStyle } from "../helper/styles";

export default function FuerWen({ myRef }) {
  return (
    <Box ref={myRef} id="fuerWen" sx={{ ...pageStyle }}>
      FuerWen
    </Box>
  );
}
