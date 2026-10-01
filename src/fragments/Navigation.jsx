import { AppBar, Box, Menu, Toolbar } from "@mui/material";
import { isMobile } from "../helper/helperFunc";
import LinkFrag from "./LinkFrag.jsx";
import logo from "../assets/logo.png";

function Menubar({ curTarget }) {
  const style = isMobile()
    ? {
        display: "grid",
        flexDirection: "column",
        width: "100%",
        padding: "2vw",
      }
    : {};

  return (
    <>
      <img
        src={logo}
        style={{
          height: "80px",
          aspectRatio: 1,
        }}
      />
      <Box sx={{ ...style }}>
        <LinkFrag text="Die Praxis" scrollID="praxis" trigger={curTarget} />
        <LinkFrag
          text="Was ist LOM?"
          scrollID="wasIstLom"
          trigger={curTarget}
        />
        <LinkFrag text="Über mich" scrollID="ueberMich" trigger={curTarget} />
        <LinkFrag text="Für Wen?" scrollID="fuerWen" trigger={curTarget} />
        <LinkFrag
          text="Kontakt und Lage"
          scrollID="contact"
          trigger={curTarget}
        />
      </Box>
    </>
  );
}

function Vertical({ curTarget }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            height: "10vh",

            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Menubar curTarget={curTarget} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function Horizontal() {
  return (
    <Box
      sx={{
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <Menubar />
    </Box>
  );
}

export default function Navigation({ curTarget }) {
  return (
    <>{isMobile() ? <Horizontal /> : <Vertical curTarget={curTarget} />}</>
  );
}
