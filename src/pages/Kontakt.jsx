import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { AlternateEmail, LocationPin, Phone } from "@mui/icons-material";
import praxis from "../assets/roster/foto12.jpeg";

export default function Kontakt({ myRef }) {
  return (
    <Box
      ref={myRef}
      id="contact"
      className="page wrapper-page bg-image row-flex"
      sx={{
        position: "relative",
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${praxis})`,
        padding: "10vh 15vh",

        justifyContent: "flex-start",
        alignItems: "flex-end",
      }}
    >
      <Box
        maxWidth={500}
        sx={{
          backgroundColor: "rgba(255,255,255,0.5)",
          padding: "2vh",
          borderRadius: "5px",
        }}
      >
        <Typography color="secondary.main" variant="h2">
          Kontakt
        </Typography>
        <Typography
          variant="subtitle1"
          color="secondary.main"
          sx={{ gridRow: 2 }}
        >
          <b>
            Praxis für Ergotherapie und Lösungorientiertes Malen®
            <br />
            Maria Neuling, Ergotherapeutin (B.Sc.)
          </b>
        </Typography>
        <Typography
          variant="subtitle1"
          color="secondary.main"
          sx={{ gridRow: 2 }}
        >
          <a
            href="https://www.google.com/maps/place/Berlepschstraße+2,+14165+Berlin/@52.4299286,13.2541638,17z/data=!3m1!4b1!4m6!3m5!1s0x47a85a32cd077541:0x875d741ccb3306a6!8m2!3d52.4299254!4d13.2567387!16s%2Fg%2F11q48hxpv8?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            style={{ textDecoration: "underline", color: "inherit" }}
          >
            <b>Berlepschstraße 2, 14165 Berlin</b>
            <LocationPin fontSize="small" />
          </a>
        </Typography>

        <Typography
          variant="subtitle1"
          color="secondary.main"
          sx={{ gridRow: 2 }}
        >
          <b>0157 57 236 000</b>
          <Phone fontSize="small" />
        </Typography>

        <Typography
          variant="subtitle1"
          color="secondary.main"
          sx={{ gridRow: 2 }}
        >
          <a
            href="mailto:fragner.maria@gmx.de"
            style={{ textDecoration: "underline", color: "inherit" }}
          >
            <b>info@ergo-lom.de</b>
            <AlternateEmail fontSize="small" />
          </a>
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 500,
          padding: "2vh",
          margin: "10vh 15vh",
          background: "rgba(0,0,0,0.25)",
          display: "grid",
          placeItems: "center",

          borderRadius: "5px",
        }}
      >
        <Typography
          variant="subtitle1"
          color="primary.main"
          sx={{ "&>*": { color: "inherit" } }}
        >
          <Link to="/impressum">Impressum</Link> |{" "}
          <Link to="/daten">Datenschutzerklärung</Link>
        </Typography>
      </Box>
    </Box>
  );
}
