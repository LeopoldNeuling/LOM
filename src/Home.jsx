import { useRef, useEffect, useState } from "react";
import { Box, Divider } from "@mui/material";
import Navigation from "./fragments/Navigation";
import DiePraxis from "./pages/DiePraxis";
import FuerWen from "./pages/FuerWen";
import Kontakt from "./pages/Kontakt";
import UeberMich from "./pages/UeberMich";
import WasIstLom from "./pages/WasIstLom";

export default function Home() {
  const refs = {
    praxis: useRef(),
    lom: useRef(),
    about: useRef(),
    audience: useRef(),
    contact: useRef(),
  };
  const [target, setTarget] = useState("praxis");

  // scrolling beahviour
  function applyObserver(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTarget(entry.target.id);
      }
    });
  }
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => applyObserver(entries),
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

      <Box
        sx={{
          backgroundColor: "primary.main",
          minHeight: "90vh",
        }}
      >
        <DiePraxis myRef={refs.praxis} />
        <WasIstLom myRef={refs.lom} />
        <Divider />
        <UeberMich myRef={refs.about} />
        <Divider />
        <FuerWen myRef={refs.audience} />
        <Kontakt myRef={refs.contact} />
      </Box>
    </>
  );
}
