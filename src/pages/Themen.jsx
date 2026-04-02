import { Box } from "@mui/material";
import { pageStyle } from "../../styles";

export default function Themen({ myRef }) {
  return (
    <Box ref={myRef} id="themen" sx={{ ...pageStyle }}>
      themen
    </Box>
  );
}
