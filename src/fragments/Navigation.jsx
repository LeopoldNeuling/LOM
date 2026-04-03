import { AppBar, Avatar, Box, Toolbar } from "@mui/material";
import Link from "./Link.jsx";
import logo from "../assets/logo.png";
import { horizontalSpaceBetweenFlex, navHeight } from "../helper/styles";

export default function Navigation({ curTarget }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            ...navHeight,
            ...horizontalSpaceBetweenFlex,
          }}
        >
          <img
            src={logo}
            style={{
              height: "80px",
              aspectRatio: 1,
            }}
          />

          <Box>
            <Link text="Die Praxis" scrollID="praxis" trigger={curTarget} />
            <Link
              text="Was ist LOM?"
              scrollID="wasIstLom"
              trigger={curTarget}
            />
            <Link text="Über mich" scrollID="ueberMich" trigger={curTarget} />
            <Link text="Für Wen?" scrollID="fuerWen" trigger={curTarget} />
            <Link
              text="Kontakt und Lage"
              scrollID="contact"
              trigger={curTarget}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
