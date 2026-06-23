import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { isMobile } from "../helper/helperFunc";

const accodionStyling = { marginTop: "2vw" };

function Lebenslauf({ content }) {
  return isMobile() ? (
    <Accordion sx={{ ...accodionStyling }}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color="secondary.main" variant="h6">
          Lebenslauf
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color="secondary.main" variant="body1" component="div">
          {content}
        </Typography>
      </AccordionDetails>
    </Accordion>
  ) : (
    <>
      <Typography color="secondary.main" variant="h6">
        Lebenslauf
      </Typography>
      <Typography color="secondary.main" variant="body1" component="div">
        {content}
      </Typography>
    </>
  );
}

function Fortbildungen({ content }) {
  return isMobile() ? (
    <Accordion sx={{ ...accodionStyling }}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color="secondary.main" variant="h6">
          Fortbildungen
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color="secondary.main" variant="body1" component="div">
          {content}
        </Typography>
      </AccordionDetails>
    </Accordion>
  ) : (
    <>
      <Typography color="secondary.main" variant="h6">
        Fortbildungen
      </Typography>
      <Typography color="secondary.main" variant="body1" component="div">
        {content}
      </Typography>
    </>
  );
}

export default function StaffInfo({ children, row, col }) {
  const [lebenslauf, fortbildungen] = children;

  return (
    <div
      style={{
        display: isMobile() ? "flex" : "grid",
        placeItems: "start",
        flexDirection: "column",
        gridColumn: col,
        gridRow: row,
      }}
    >
      <Lebenslauf content={lebenslauf} />
      <Fortbildungen content={fortbildungen} />
    </div>
  );
}
