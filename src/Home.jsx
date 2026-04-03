import { useRef, useEffect, useState } from "react";
import { Box, LinearProgress, Divider } from "@mui/material";
import { canvasHeight, mobileProgressBarStyle } from "./helper/styles";
import { isMobile } from "./helper/helperFunc";
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
  const [scrollProgress, setScrollProgress] = useState(0);

  // scrolling outline
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

  // scrolling behaviour
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      let progress = (scrollTop / docHeight) * 100;

      if (progress < 0) progress = 0;
      else if (progress > 100) progress = 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!isMobile() ? (
        <Navigation curTarget={target} />
      ) : (
        <LinearProgress
          value={scrollProgress}
          color="secondary"
          variant="determinate"
          sx={{ ...mobileProgressBarStyle }}
        />
      )}
      <Box
        sx={{
          backgroundColor: "primary.main",
          ...canvasHeight,
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
