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

  const formattedLebenslauf = cloneElement(lebenslauf, {
    children: Children.map(lebenslauf.props.children, (child) => {
      const curText = child.props.children;

      if (typeof curText !== "string" || !curText.includes(":")) {
        return child;
      }

      const colonPos = curText.indexOf(":");
      const date = curText.substring(0, colonPos);
      const rest = curText.substring(colonPos + 1);

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

  const navMargin = isMobile() ? { marginTop: "2vh" } : {};

  return (
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
