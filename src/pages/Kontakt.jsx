import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import praxis from "../assets/roster/foto12.jpeg";

export default function Kontakt({ myRef }) {
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
          backgroundColor: "rgba(0,0,0,0.25)",
          borderTop: "solid 1px white",

          display: "flex",
          flexDirection: "row",

          "&>*": { paddingInline: "2vw" },
          "&>*>*>*": { color: "inherit" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "grid",
            placeItems: "center",
            borderRight: "solid 1px white",
          }}
        >
          <Typography variant="subtitle1" color="primary.main">
            <div>
              Praxis für Ergotherapie und Lösungorientiertes Malen®, Maria
              Neuling, Ergotherapeutin (B.Sc.)
            </div>
            <a
              href="https://maps.app.goo.gl/22NJAR8yqV8RE15r6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Berlepschstraße 2, 14165 Berlin
            </a>{" "}
            | <a href="tel:015757236000">0157 57 236 000</a> |{" "}
            <a href="mailto:info@ergo-lom.de">info@ergo-lom.de</a>
          </Typography>
        </Box>
        <Box
          sx={{
            width: "55vw",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Typography variant="subtitle1" color="primary.main">
            <Link to="/impressum">Impressum</Link> |{" "}
            <Link to="/daten">Datenschutzerklärung</Link> |{" "}
            <Link to="/links">Interessante Links</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
