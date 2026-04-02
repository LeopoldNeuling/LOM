import { Box } from "@mui/material";
import { pageStyle } from "../helper/styles";

export default function WasIstLom({ myRef }) {
  return (
    <Box ref={myRef} id="wasIstLom" sx={{ ...pageStyle }}>
      was ist lom
    </Box>
  );
}
