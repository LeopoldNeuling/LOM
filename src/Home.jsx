import { useRef, useEffect, useState } from "react";
import { Box, Divider, IconButton, Drawer } from "@mui/material";
import Navigation from "./fragments/Navigation";
import DiePraxis from "./pages/DiePraxis";
import FuerWen from "./pages/FuerWen";
import Kontakt from "./pages/Kontakt";
import UeberMich from "./pages/UeberMich";
import WasIstLom from "./pages/WasIstLom";
import { isMobile } from "./helper/helperFunc";
import { Menu } from "@mui/icons-material";

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

  // drawer handler
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      {isMobile() ? (
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
          >
            <Navigation curTarget={target} />
          </Box>
        </Drawer>
      ) : (
        <Navigation curTarget={target} />
      )}

      <Box
        sx={{
          backgroundColor: "primary.main",
          minHeight: "90vh",
        }}
      >
        <IconButton
          sx={{
            position: "sticky",
            top: 0,
            left: 0,
            backgroundColor: "secondary.main",
            color: "secondary.contrastText",
            marginLeft: "2vw",
            zIndex: 1000,
            "&:active": { backgroundColor: "secondary.main" },
          }}
          onClick={toggleDrawer(true)}
        >
          <Menu />
        </IconButton>

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
