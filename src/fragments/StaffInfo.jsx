import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { isMobile } from "../helper/helperFunc";
import { Children, cloneElement, useState } from "react";

const accodionStyling = { marginTop: "2vw" };

export default function StaffInfo({ children, row, col }) {
  const [lebenslauf, fortbildungen] = children;

  let curText, colonPos, date, rest;
  const formattedLebenslauf = cloneElement(lebenslauf, {
    children: Children.map(lebenslauf.props.children, (child) => {
      curText = child.props.children;

      if (typeof curText !== "string" || !curText.includes(":")) return child;

      colonPos = curText.indexOf(":");
      date = curText.substring(0, colonPos);
      rest = curText.substring(colonPos + 1);

      return cloneElement(child, {
        children: (
          <>
            <b>{date}:</b>
            {rest}
          </>
        ),
      });
    }),
  });

  const [vLebenslauf, setV] = useState(true);

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (_event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const navMargin = isMobile() ? { marginTop: "2vh" } : {};

  return isMobile() ? (
    <>
      <Accordion
        sx={{ marginTop: "2vh" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h6">Lebenslauf</Typography>
        </AccordionSummary>
        <AccordionDetails>{formattedLebenslauf}</AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h6">Fortbildungen</Typography>
        </AccordionSummary>
        <AccordionDetails>{fortbildungen}</AccordionDetails>
      </Accordion>
    </>
  ) : (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      useFlexGap
      sx={{ flexWrap: "wrap", ...navMargin }}
    >
      <Button
        onClick={() => setV(true)}
        variant={vLebenslauf ? "contained" : "outlined"}
      >
        Lebenslauf
      </Button>
      <Button
        onClick={() => setV(false)}
        variant={!vLebenslauf ? "contained" : "outlined"}
      >
        Fortbildungen
      </Button>
      {vLebenslauf ? formattedLebenslauf : fortbildungen}
    </Stack>
  );
}
