import { Box, Typography } from "@mui/material";
import { firstPageMarginTop, pageStyle } from "../helper/styles";
import meer from "../assets/meer.png";

export default function DiePraxis({ myRef }) {
  return (
    <Box
      ref={myRef}
      id="praxis"
      sx={{
        ...pageStyle,
        ...firstPageMarginTop,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,0.25)), url(${meer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",

        textAlign: "center",
        placeItems: "center",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "repeat(5, 1fr)",
      }}
    >
      <Typography
        variant="h3"
        color="primary.contrastText"
        sx={{ gridArea: "2/1", marginRight: "10px" }}
      >
        <b>
          Willkommen in der
          <br /> Praxis für Ergotherapie
          <br />
          und Lösungsorientiertes Malen®
        </b>
      </Typography>
    </Box>
  );
}
