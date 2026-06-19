import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { isMobile } from "../helper/helperFunc";

function Lebenslauf({ content }) {
  return isMobile() ? (
    <Accordion sx={{ width: "84vw", marginInline: "auto", marginTop: "1vh" }}>
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
    <Accordion sx={{ width: "84vw", marginInline: "auto", marginTop: "1vh" }}>
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

export default function StaffInfo({ children }) {
  const [lebenslauf, fortbildungen] = children;

  return (
    <div
      style={{
        display: isMobile() ? "flex" : "grid",
        placeItems: "start",
        flexDirection: "column",
      }}
    >
      <Lebenslauf content={lebenslauf} />
      <Fortbildungen content={fortbildungen} />
      <div></div>
    </div>
  );
}
