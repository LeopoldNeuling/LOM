import { Box, Typography } from "@mui/material";
import meerNeu from "../assets/meerNeu.png";
import { isMobile } from "../helper/helperFunc";
import { useEffect } from "react";

export default function DiePraxis({ myRef }) {
  useEffect(() => {
    const img = new Image();
    img.src = meerNeu;
  }, []);

  return (
    <Box
      ref={myRef}
      id="praxis"
      className={`${isMobile() ? "mobile-page" : "page wrapper-page"} bg-image`}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: isMobile() ? "5vh" : "15vh",
        height: "90svh",

        textAlign: "center",
        backgroundImage: `linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,0.25)), url(${meerNeu})`,
      }}
    >
      <Typography
        variant={isMobile() ? "h5" : "h3"}
        color="primary.contrastText"
      >
        {isMobile() ? (
          <b>
            Willkommen in der Praxis für
            <br />
            Ergotherapie und Lösungsorientiertes Malen®
          </b>
        ) : (
          <b>
            Willkommen in der
            <br />
            Praxis für Ergotherapie
            <br />
            und Lösungsorientiertes Malen®
          </b>
        )}
      </Typography>
    </Box>
  );
}
