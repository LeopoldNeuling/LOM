import { canvasHeight } from "../styles";
import Navigation from "./fragments/Navigation";
import { Divider, Box } from "@mui/material";
import DiePraxis from "./pages/DiePraxis";
import FuerWen from "./pages/FuerWen";
import Kontakt from "./pages/Kontakt";
import Themen from "./pages/Themen";
import UeberMich from "./pages/UeberMich";
import WasIstLom from "./pages/WasIstLom";
import { useRef, useEffect, useState } from "react";

export default function App() {
  const refs = {
    praxis: useRef(),
    lom: useRef(),
    about: useRef(),
    topics: useRef(),
    audience: useRef(),
    contact: useRef(),
  };

  const [target, setTarget] = useState("praxis");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTarget(entry.target.id);
          }
        });
      },
      {
        threshold: 0.75,
      },
    );

    Object.values(refs).forEach((ref) => {
      observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navigation curTarget={target} />
      <Divider />
      <Box
        sx={{
          backgroundColor: "primary.main",
          ...canvasHeight,
        }}
      >
        <DiePraxis myRef={refs.praxis} />
        <WasIstLom myRef={refs.lom} />
        <UeberMich myRef={refs.about} />
        <Themen myRef={refs.topics} />
        <FuerWen myRef={refs.audience} />
        <Kontakt myRef={refs.contact} />
      </Box>
    </>
  );
}
