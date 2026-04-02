import { Box } from "@mui/material";
import { pageStyle } from "../helper/styles";

export default function UeberMich({ myRef }) {
  return (
    <Box ref={myRef} id="ueberMich" sx={{ ...pageStyle }}>
      über mich
    </Box>
  );
}
