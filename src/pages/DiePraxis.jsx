import { Box } from "@mui/material";
import { firstPageMarginTop, pageStyle } from "../../styles";

export default function DiePraxis({ myRef }) {
  return (
    <Box ref={myRef} id="praxis" sx={{ ...pageStyle, ...firstPageMarginTop }}>
      die Praxis
    </Box>
  );
}
