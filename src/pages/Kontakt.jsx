import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { AlternateEmail, LocationPin, Phone } from "@mui/icons-material";
import { isMobile } from "../helper/helperFunc";
import praxis from "../assets/roster/foto12.jpeg";

export default function Kontakt({ myRef }) {
  const impressum = isMobile()
    ? {}
    : {
        position: "absolute",
        bottom: 0,
        right: 0,
      };

  return (
    <Box
      ref={myRef}
      id="contact"
      className={"page wrapper-page bg-image"}
      sx={{
        position: "relative",
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${praxis})`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "10vh",
          backgroundColor: "secondary.main",

          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box sx={{ outline: "blue" }}>
          <Link>Berlepschstraße 2, 14165 Berlin</Link>
          <Link>0157 57 236 000</Link> <Link>info@ergo-lom.de</Link>
        </Box>
        <Box sx={{ outline: "red" }}>
          <Link to="/daten">Datenschutzerklärung</Link> |
          <Link to="/impressum">Impressum</Link> |
          <Link to="/links">Interessante Links</Link>
        </Box>
      </Box>
    </Box>
  );
}
