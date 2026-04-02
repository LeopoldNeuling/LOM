import { Box } from "@mui/material";
import { pageStyle } from "../helper/styles";

export default function Themen({ myRef }) {
  return (
    <Box ref={myRef} id="themen" sx={{ ...pageStyle }}>
      themen
    </Box>
  );
}
