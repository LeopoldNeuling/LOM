import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { firstPageMarginTop, pageStyle } from "../helper/styles";
import { isMobile } from "../helper/helperFunc";
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

        textAlign: "center",
        display: "grid",
        placeItems: "center",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "repeat(6, 1fr)",
      }}
    >
      <Typography
        variant={isMobile() ? "h4" : "h3"}
        color="primary.contrastText"
        sx={{ gridArea: "2/1" }}
      >
        <b>
          Willkommen in der
          <br /> Praxis für Ergotherapie
          <br />
          und Lösungsorientiertes Malen®
        </b>
      </Typography>

      <Box>
        <Accordion>
          <AccordionSummary>hallo</AccordionSummary>
          <AccordionDetails>
            Das Angebot der Praxis für Ergotherapie und LOM® richtet sich
            speziell an Menschen mit psychischen und psychosomatischen
            Belastungsfaktoren.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>hallo</AccordionSummary>
          <AccordionDetails>
            Ein besonderer Schwerpunkt liegt auf nonverbalen Therapieverfahren
            wie dem Lösungsorientierten Malen (LOM®).
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>hallo</AccordionSummary>
          <AccordionDetails>
            Die Praxis befindet sich in Berlin Zehlendorf. Hier biete ich
            psychisch-funktionelle Behandlungen für gesetzlich und privat
            krankenversicherte Personen an.
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* <Typography
        variant={isMobile() ? "h4" : "h5"}
        color="secondary.contrastText"
        sx={{
          gridArea: "5/1",
          margin: "0 20vh",
          textAlign: "left",
          backgroundColor: "rgba(0,0,0,0.1)",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
      </Typography> */}
    </Box>
  );
}
