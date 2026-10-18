import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import praxis from "../../assets/roster/foto12.jpeg";

export default function Kontakt({ myRef }) {
  return (
    <Box
      ref={myRef}
      id="contact"
      className={"page wrapper-page bg-image"}
      sx={{
        position: "relative",
        backgroundImage: `linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url(${praxis})`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: "5vh 0",

        paddingInline: "1vw",
      }}
    >
      <Typography variant="h6" color="secondary.main" textAlign="center">
        Praxis für Ergotherapie und Lösungorientiertes Malen® <br />
        <br />
        Maria Neuling <br /> Ergotherapeutin (B.Sc.)
      </Typography>
      <a
        href="https://maps.app.goo.gl/22NJAR8yqV8RE15r6"
        target="_blank"
        rel="noopener noreferrer"
      >
        Berlepschstraße 2, 14165 Berlin
      </a>
      <a href="tel:015757236000">0157 57 236 000</a>
      <a href="mailto:info@ergo-lom.de">info@ergo-lom.de</a>
      <Link to="/impressum">Impressum</Link>
      <Link to="/daten">Datenschutzerklärung</Link>
      <Link to="/links">Interessante Links</Link>
    </Box>
  );
}
