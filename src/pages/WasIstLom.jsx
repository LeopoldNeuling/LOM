import { useState, Fragment } from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import { isMobile } from "../helper/helperFunc";
import { darkCol } from "../main";
import foto1 from "../assets/roster/foto1.jpeg";
import foto2 from "../assets/roster/foto2.jpeg";
import foto3 from "../assets/roster/foto3.jpeg";
import foto4 from "../assets/roster/foto4.jpeg";
import foto5 from "../assets/roster/foto5.jpeg";
import foto6 from "../assets/roster/foto6.jpeg";
import foto7 from "../assets/roster/foto7.jpg";
import foto8 from "../assets/roster/foto8.jpg";
import foto9 from "../assets/roster/foto9.jpg";
import foto10 from "../assets/roster/foto10.jpg";
import foto11 from "../assets/roster/foto11.jpg";
import foto12 from "../assets/roster/foto12.jpeg";

const itemData = [
  foto1,
  foto2,
  foto3,
  foto4,
  foto9,
  foto6,
  foto5,
  foto8,
  foto7,
  foto10,
  foto11,
  foto12,
];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [viewing, setViewing] = useState();
  const handleClickOpen = (img) => {
    setViewing(img);
    setOpen(true);
  };
  const handleClose = () => {
    setViewing();
    setOpen(false);
  };

  return (
    <>
      <ImageList
        sx={{
          width: isMobile() ? "80vw" : "50vw",
          height: "60vh",

          overscrollBehavior: "contain",
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            background: "primary.main",
          },
          "&::-webkit-scrollbar-thumb": {
            background: darkCol,
            borderRadius: "10px",
          },
        }}
        cols={isMobile() ? 3 : 4}
        rowHeight={isMobile() ? 110 : 175}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item}
            onClick={() => handleClickOpen(item)}
            sx={{ cursor: "pointer", overflow: "hidden" }}
          >
            <img
              srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item}?w=164&h=164&fit=crop&auto=format`}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Fragment>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <img src={viewing} width={isMobile() ? "250px" : "400px"} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Zurück</Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    </>
  );
}

export default function WasIstLom({ myRef }) {
  return (
    <Box
      ref={myRef}
      id="wasIstLom"
      className={
        isMobile() ? "mobile-page mobile-content-page" : "page content-page"
      }
      sx={{
        position: "relative",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {isMobile() ? (
        <>
          <Typography color="secondary.main" variant="h2">
            Was ist LOM?
          </Typography>
          <Gallery />
        </>
      ) : (
        <div>
          <Typography color="secondary.main" variant="h2">
            Was ist LOM?
          </Typography>
          <Gallery />
        </div>
      )}

      <Typography
        variant="subtitle"
        color="secondary.main"
        maxWidth={isMobile() ? "80vw" : "30vw"}
        textAlign={"center"}
      >
        LOM® fördert die seelische Gesundheit und wirkt sich positiv auf
        Stresslevel und Belastungen aus. Neue Perspektiven auf festgefahrene,
        scheinbar „unlösbare“ Probleme werden gefördert.
        <p></p>
        Das Lösungsorientierte Malen wirkt emotionsregulierend durch den
        Eindruck, den die Bilder auf die Malenden machen. Es geht darum,
        Störendes durch störungsfreie Bilder im Gehirn zu ersetzen und dabei
        auftauchende Gefühle und Themen mit einfachen Bildern zu versorgen und
        zu würdigen. Die malende Person wählt ein persönliches Thema, das
        belastende Emotionen verursacht.
        <p></p>
        Auf diese Weise können Symptome, Wünsche, Beziehungen, Entscheidungen,
        Kognitionen und Traumafolgestörungen bearbeitet werden.
        <p></p>
        Das Therapieverfahren von Bettina Egger und Jörg Merz basiert auf
        Erkenntnissen aus der Hirnforschung und ist durch wissenschaftliche
        Studien belegt.
        <p></p>
        Im ergotherapeutischen Prozess wird zunächst das individuelle Anliegen
        sorgfältig exploriert und geklärt.
        <br /> In langsamem Tempo mit liebevoller Aufmerksamkeit entstehen
        klare, einfache und eindeutige Bilder.
        <p></p>
        Das Verfahren eignet sich für alle Menschen mit psychischen und
        psychosomatischen Belastungsfaktoren, die sich Veränderung und Klärung
        wünschen.
      </Typography>
    </Box>
  );
}
