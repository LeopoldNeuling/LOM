import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { pageStyle } from "../helper/styles";
import foto1 from "../assets/roster/foto1.jpeg";
import foto2 from "../assets/roster/foto2.jpeg";
import foto3 from "../assets/roster/foto3.jpeg";
import foto4 from "../assets/roster/foto4.jpeg";
import foto5 from "../assets/roster/foto9.jpg";
import foto6 from "../assets/roster/foto6.jpeg";
import foto7 from "../assets/roster/foto5.jpeg";
import foto8 from "../assets/roster/foto8.jpg";
import foto9 from "../assets/roster/foto7.jpg";
import foto10 from "../assets/roster/foto10.jpg";
import foto11 from "../assets/roster/foto11.jpg";
import foto12 from "../assets/roster/foto12.jpeg";

export default function WasIstLom({ myRef }) {
  const itemData = [
    {
      img: foto1,
    },
    {
      img: foto2,
    },
    {
      img: foto3,
    },
    {
      img: foto4,
    },
    {
      img: foto5,
    },
    {
      img: foto6,
    },
    {
      img: foto7,
    },
    {
      img: foto8,
    },
    {
      img: foto9,
    },
    {
      img: foto10,
    },
    {
      img: foto11,
    },
    {
      img: foto12,
    },
  ];

  return (
    <Box
      ref={myRef}
      id="wasIstLom"
      sx={{
        ...pageStyle,
        width: "95%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "5vh",
      }}
    >
      <Box>
        <Typography color="secondary.main" variant="h2">
          Was ist LOM?
        </Typography>

        <ImageList sx={{ width: 700, height: 500 }} cols={4} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      <Typography variant="subtitle" color="secondary.main" maxWidth={400}>
        LOM® fördert die seelische Gesundheit, indem es sich günstig auf
        Stresslevel und Belastungen durch negative Emotionen auswirkt. Neue
        Perspektiven auf festgefahrene, scheinbar „unlösbare“ Probleme werden
        gefördert.
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
        Im ergotherapeutischen Prozess wir zunächst das individuelle Anliegen
        sorgfältig exploriert und geklärt. In langsamem Tempo mit liebevoller
        Aufmerksamkeit entstehen klare, einfache und eindeutige Bilder.
        <p></p>
        Das Verfahren eignet sich für alle Menschen mit psychischen und
        psychosomatischen Belastungsfaktoren, die sich Veränderung und Klärung
        wünschen.
      </Typography>
    </Box>
  );
}
