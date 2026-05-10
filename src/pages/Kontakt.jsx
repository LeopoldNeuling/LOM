import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { AlternateEmail, LocationPin, Phone } from "@mui/icons-material";
import { isMobile } from "../helper/helperFunc";
import praxis from "../assets/roster/foto12.jpeg";
import dve from "../assets/impressum/image002.jpg";

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
        padding: "10vh 15vh",

        display: "flex",
        flexDirection: isMobile() ? "column" : "row",
        justifyContent: isMobile() ? "center" : "flex-start",
        alignItems: isMobile() ? "center" : "flex-end",
      }}
    >
      <Box
        width={isMobile() ? "90vw" : "40vw"}
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
            href="https://maps.app.goo.gl/5vkEKLtKMDbJcbcMA"
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
            href="mailto:info@ergo-lom.de"
            style={{ textDecoration: "underline", color: "inherit" }}
          >
            <b>info@ergo-lom.de</b>
            <AlternateEmail fontSize="small" />
          </a>
        </Typography>
      </Box>
      <Box
        sx={{
          ...impressum,
          width: isMobile() ? "85vw" : "30vw",
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
          sx={{
            "&>*": {
              color: "inherit",
            },
          }}
        >
          <Link to="/impressum">Impressum</Link> |{" "}
          <Link to="/daten">Datenschutzerklärung</Link>
          <br />
          <p></p>
          <a href="https://www.dve.info" target="_blank">
            <img src={dve} width={60} height={60} />
          </a>
        </Typography>

        <div style={{ width: "100%", maxWidth: "600px", zIndex: 10000 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2527631.4790429487!2d7.7464261!3d51.7807558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa02a0fd8357d070d%3A0xfd16c8ccccca5fd1!2sPraxis%20f%C3%BCr%20Ergotherapie%20und%20L%C3%B6sungsorientiertes%20Malen%C2%AE!5e0!3m2!1sde!2sde!4v1778438950159!5m2!1sde!2sde"
            style={{ width: "100%", height: 350, border: 0 }}
            allowFullScreen
            loading="lazy"
            // referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Box>
    </Box>
  );
}
